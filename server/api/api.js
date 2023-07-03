import express from 'express';
import mqtt from 'mqtt';
import pkg from 'pg';
import dotenv from 'dotenv';
const { Client } = pkg;

// Load env variables
dotenv.config();
const API_HOST = process.env.API_HOST;
const API_PORT = process.env.API_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;    
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const MQTT_HOST = process.env.MQTT_HOST;
const MQTT_PORT = process.env.MQTT_PORT;

const app = express();

const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

const mqttClient = mqtt.connect(`mqtt://${MQTT_HOST}:${MQTT_PORT}`);

const connectDB = () => {
    console.log('Connecting to DB...');
    try {
        client.connect();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    } finally {
        console.log('DB connected');
    }
};

const connectMQTT = () => {
    console.log('Connecting to MQTT...');
    try {
        mqttClient.on('connect', () => {
            console.log('MQTT connected');
            mqttClient.subscribe('sprinkler_system');
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    } finally {
        mqttClient.publish('sprinkler_system', 'API connected');
    }
};

connectDB();
connectMQTT();

// Routes
app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

// --------------- DB Routes --------------- //
app.get('/api/db/events', (req, res) => {
    console.log('GET /api/db/events')
    // Get events from DB
    client.query('SELECT * FROM events', (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } else {
            res.json(result.rows);
        }
    });
});

app.get('/api/db/events/status', (req, res) => {
    console.log('GET /api/db/events/status')
    // Get current status for events from DB
    client.query('SELECT id,status FROM events WHERE status = true', (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } else {
            res.json(result.rows);
        }
    });
});

app.post('/api/db/events', (req, res) => {
    console.log('POST /api/db/events')
    // Add event to DB
    const start_time = req.body.start_time;
    const duration_minutes = req.body.duration_minutes;
    const weekdays = req.body.weekdays;
    client.query('INSERT INTO events (start_time, duration_minutes, weekdays) VALUES ($1, $2, $3)', [start_time, duration_minutes, weekdays], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } else {
            res.status(201).send('Event added');
        }
    });
});

app.put('/api/db/events/:id', (req, res) => {
    console.log('UPDATE /api/db/events/:id')
    // Update event in DB
    const id = req.params.id;
    const start_time = req.body.start_time;
    const duration_minutes = req.body.duration_minutes;
    const weekdays = req.body.weekdays;
    client.query('UPDATE events SET start_time = $1, duration_minutes = $2, weekdays = $3 WHERE id = $4', [start_time, duration_minutes, weekdays, id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } else {
            res.status(200).send('Event updated');
        }
    });
});

app.delete('/api/db/events/:id', (req, res) => {
    console.log('DELETE /api/db/events/:id')
    // Delete event from DB
    const id = req.params.id;
    client.query('DELETE FROM events WHERE id = $1', [id], (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } else {
            res.status(200).send('Event deleted');
        }
    });
});

// --------------- MQTT Routes --------------- //


app.listen(API_PORT, () => {
    console.log(`API listening at http://${API_HOST}:${API_PORT}`);
});

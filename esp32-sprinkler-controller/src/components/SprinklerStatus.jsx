import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "../stylesheets/sprinkler-status-styles.css";

export default function SprinklerStatusComponent({sprinklerInfo}) {
  return (
    <>
    <div className="main-container">
        <Container fluid className="text-start">
            <h2 className="text-white text-left"><u>{sprinklerInfo.name}</u></h2>
        </Container>
        <Container className="text-start">
            <Row xs="auto">
                <Col>
                    <h4>Location:</h4>
                </Col>
                <Col>
                    <h4>{sprinklerInfo.location}</h4>
                </Col>
            </Row>
            <Row xs="auto">
                <Col>
                    <h4>Zone:</h4>
                </Col>
                <Col>
                    <h4>{sprinklerInfo.zone}</h4>
                </Col>
            </Row>
            <Row xs="auto">
                <Col>
                    <h4>Status:</h4>
                </Col>
                <Col>
                    <h4>{sprinklerInfo.status}</h4>
                </Col>
            </Row>
            <Row xs="auto">
                <Col>
                    <h4>On Duration:</h4>
                </Col>
                <Col>
                    <h4>{sprinklerInfo.onDuration}m</h4>
                </Col>
            </Row>
            <Row xs="auto">
                <h4>Schedule</h4>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>12:00</td>
                            <td>30m</td>
                            <td>Off</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>12:00</td>
                            <td>30m</td>
                            <td>Off</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>12:00</td>
                            <td>30m</td>
                            <td>Off</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    </div>
    </>
  )
}

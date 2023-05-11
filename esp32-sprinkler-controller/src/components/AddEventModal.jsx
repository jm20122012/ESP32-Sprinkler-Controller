import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';
import { useState } from 'react';
import "../stylesheets/custom-styles.css";

export default function AddEventModal(props) {
    const [ weekday, setWeekday ] = useState("Sunday");
    const [ startTimeHour, setStartTimeHour ] = useState("1");
    const [ startTimeMinute, setStartTimeMinute ] = useState("00");
    const [ duration, setDuration ] = useState("1");
    const [ amPm, setAmPm ] = useState("AM");

    return (
        <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Sprinkler Event
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Weekday</Form.Label>
                        <Form.Select aria-label="Select Weekday"
                            onChange={(e) => {
                                setWeekday(e.target.value);
                            }}>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Label>Start Time (H:M)</Form.Label>
                        <div className="d-flex mb-3">
                            <Form.Select className="time-picker-select" aria-label="Select Time"
                                onChange={(e) => {
                                    setStartTimeHour(e.target.value);
                                }}>
                                {
                                    Array.from(Array(12)).map((_, index) => {
                                        return <option key={index + 1}>{index + 1}</option>
                                    })
                                } 
                            </Form.Select>
                            <p className="my-auto" style={{marginRight: "10px"}}>:</p>
                            <Form.Select className="time-picker-select" aria-label="Select Time"
                                onChange={(e) => {
                                    setStartTimeMinute(e.target.value);
                                }}>
                                {
                                    Array.from(Array(60 / 5)).map((_, index) => {
                                        if (index === 0 || index === 1){
                                            return <option key={"0" + index * 5}>{"0" + index * 5}</option>
                                        }
                                        return <option key={index * 5}>{index * 5}</option>
                                    })
                                } 
                            </Form.Select>
                            <Form.Select style={{marginLeft: "10px", width: "75px"}} aria-label="Select Time"
                                onChange={(e) => {
                                    setAmPm(e.target.value);
                                }}>
                                <option>AM</option>
                                <option>PM</option>
                            </Form.Select>
                        </div>
                    <Form.Label>Duration (minutes)</Form.Label>
                    <Form.Select aria-label="Select Duration" className="time-picker-select"
                        onChange={(e) => {
                            setDuration(e.target.value);
                        }}>
                        {Array.from(Array(30)).map((_, index) => {
                            return <option key={index + 1 + "_dmin"}>{index + 1}</option>})}
                    </Form.Select>
                </Form>
                <Form.Label className="mt-3">Run sprinkler on {weekday} starting at {startTimeHour}:{startTimeMinute} {amPm} for {duration} minutes</Form.Label>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                    <Button variant="primary" onClick={props.onHide}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import AddEventModal from './AddEventModal';
import SprinklerEventTableRow from './SprinklerEventTableRow';
import {FaPlusSquare} from 'react-icons/fa';
import "../stylesheets/sprinkler-status-styles.css";

export default function SprinklerStatusComponent({sprinklerInfo}) {

    const [showConfigModal, setShowConfigModal] = useState(false);

    const handleModalOpen = () => setShowConfigModal(true);

    return (
        <>
        <div className="main-container shadow">
            <Container fluid className="text-start">
                <h2 className="text-white text-left"><u>{sprinklerInfo.name}</u></h2>
            </Container>
            <Container fluid className="text-start mt-5">
                <Row>
                    <Col>
                        <h4 className="text-center"><u>Location</u></h4>
                        <h4 className="text-center">{sprinklerInfo.location}</h4>
                    </Col>
                    <Col>
                        <h4 className="text-center"><u>Zone</u></h4>
                        <h4 className="text-center">{sprinklerInfo.zone}</h4>
                    </Col>
                    <Col>
                        <h4 className="text-center"><u>On Duration</u></h4>
                        <h4 className="text-center">{sprinklerInfo.onDuration}m</h4>
                    </Col>
                    <Col>
                        <h4 className="text-center"><u>Status</u></h4>
                        <h4 className="text-center">{sprinklerInfo.status}</h4>
                    </Col>
                    <Col>
                        <h4 className="text-center"><u>Manual Control</u></h4>
                        <div className="d-flex justify-content-center">
                            <Form>
                                <Form.Check 
                                    className="text-white"
                                    type="switch"
                                    id="custom-switch"
                                    label="On/Off"
                                />
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className="container-fluid sprinkler-schedule-table mt-5">
                    <Col xs={4} className="my-auto">
                        <div className="d-flex">
                            <FaPlusSquare 
                                size="30px" 
                                className="text-white my-auto mr-5 clickable" 
                                onClick={() => {
                                    console.log("Add Action Clicked");
                                    setShowConfigModal(true);
                                    }}/>
                            <h4 className="my-auto">Add Action</h4>
                        </div>                
                    </Col>
                    <Col xs={4}>
                        <h4 className="text-center my-auto">Schedule</h4>
                    </Col>
                    <Col></Col>

                    <Table striped bordered hover variant="dark" className="mt-2">
                        <thead>
                            <tr>
                                <th className="text-center">Day</th>
                                <th className="text-center">Start Time</th>
                                <th className="text-center">Duration (minutes)</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SprinklerEventTableRow events={sprinklerInfo.events}/>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
        <AddEventModal show={showConfigModal} onHide={() => setShowConfigModal(false)}/>
        </>
    )
}

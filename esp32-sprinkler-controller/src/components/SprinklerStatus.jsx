import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {FaPlusSquare} from 'react-icons/fa';
import "../stylesheets/sprinkler-status-styles.css";

export default function SprinklerStatusComponent({sprinklerInfo}) {
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
                    <h4 className="text-center"><u>Status</u></h4>
                    <h4 className="text-center">{sprinklerInfo.status}</h4>
                </Col>
                <Col>
                    <h4 className="text-center"><u>On Duration</u></h4>
                    <h4 className="text-center">{sprinklerInfo.onDuration}m</h4>
                </Col>
            </Row>
            <Row className="container-fluid sprinkler-schedule-table mt-5">
                <Col xs={4} className="my-auto">
                    <div className="d-flex">
                        <FaPlusSquare size="30px" className="text-white my-auto mr-5 clickable" onClick={() => console.log("Add Action Clicked")}/>
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

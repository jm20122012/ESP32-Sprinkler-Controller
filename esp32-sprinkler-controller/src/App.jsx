import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './stylesheets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="main_app_container">
        <div className="main_app_item">
          <div className="zone_status_container">
            <h4>Zone Status</h4>
            <div className="zone_item_container row">
            <div className="col-12 col-lg-3">
              <div className="zone_status_item ">
                <h5>Zone 1</h5>
                <div className="zone_status_item_subitem">
                  <span>Status:</span>
                  <span>on/off</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Event:</span>
                  <span>Thur 0800-0815</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Remaing time:</span>
                  <span>5m</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Next Event:</span>
                  <span>Thur 1400-1415</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="zone_status_item">
                <h5>Zone 2</h5>
                <div className="zone_status_item_subitem">
                  <span>Status:</span>
                  <span>on/off</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Event:</span>
                  <span>Thur 0800-0815</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Remaing time:</span>
                  <span>5m</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Next Event:</span>
                  <span>Thur 1400-1415</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="zone_status_item">
                <h5>Zone 3</h5>
                <div className="zone_status_item_subitem">
                  <span>Status:</span>
                  <span>on/off</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Event:</span>
                  <span>Thur 0800-0815</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Remaing time:</span>
                  <span>5m</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Next Event:</span>
                  <span>Thur 1400-1415</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="zone_status_item">
                <h5>Zone 4</h5>
                <div className="zone_status_item_subitem">
                  <span>Status:</span>
                  <span>on/off</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Event:</span>
                  <span>Thur 0800-0815</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Remaing time:</span>
                  <span>5m</span>
                </div>
                <div className="zone_status_item_subitem">
                  <span>Next Event:</span>
                  <span>Thur 1400-1415</span>
                </div>
              </div>
            </div>
          </div>
          
          </div>
          </div>
          <hr style={{height: "10px"}}></hr>
          <div className="main_app_item">
          <div className="event_editor_outer_container">
            <h4>Event Editor</h4>

            <div className="event_editor_ctrl_panel_container">
              <div className="event_editor_ctrl_panel_item">
                <Form.Select>
                  <option>Zone 1</option> 
                  <option>Zone 2</option>
                  <option>Zone 3</option>
                  <option>Zone 4</option>
                </Form.Select> 
              </div>
              <div className="event_editor_ctrl_panel_item">
                <Button>Add Event</Button>
              </div>
            </div>
            <div style={{margin: "1em"}}>
              <Table style={{color: "white"}} striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-white">Event ID</th>
                    <th className="text-white">Event Name</th>
                    <th className="text-white">Event Start</th>
                    <th className="text-white">Event End</th>
                    <th className="text-white">Event Duration</th>
                    <th className="text-white">Event Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-white">1</td>
                    <td className="text-white">Event 1</td>
                    <td className="text-white">0800</td>
                    <td className="text-white">0815</td>
                    <td className="text-white">15m</td>
                    <td className="text-white">on/off</td>
                  </tr>
                  <tr>
                    <td className="text-white">2</td>
                    <td className="text-white">Event 2</td>
                    <td className="text-white">1400</td>
                    <td className="text-white">1415</td>
                    <td className="text-white">15m</td>
                    <td className="text-white">on/off</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

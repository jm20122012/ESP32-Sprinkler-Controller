import React, {useState} from 'react'
import SprinklerStatusComponent from './SprinklerStatus.jsx';
import Container from 'react-bootstrap/Container';

import "../stylesheets/homepage-styles.css"

const sprinklers = {
  sprinkler1: {
    name: "Sprinkler 1",
    location: "Front Yard",
    zone: "Front Yard - North",
    status: "On",
    onDuration: "7",
  },
  sprinkler2: {
    name: "Sprinkler 2",
    location: "Back Yard",
    zone: "Back Yard - West",
    status: "Off",
    onDuration: "30",
  }
}

export default function HomeContentComponent() {

  const [sprinklerStatus, setSprinklerStatus] = useState(sprinklers);

  return (
    <>
      <div>
        <Container fluid>
            {<SprinklerStatusComponent sprinklerInfo={sprinklerStatus.sprinkler1}/>}
            {<SprinklerStatusComponent sprinklerInfo={sprinklerStatus.sprinkler2}/>}
        </Container>
      </div>
    </>
  )
}

import { useState } from 'react'
import NavbarComponent from './components/Navbar.jsx'
import HomeContentComponent from './components/HomePage.jsx';
import SettingsPageComponent from './components/SettingsPage.jsx';
import './stylesheets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ pageContent, setPageContent ] = useState("home");

  const components = {
    "home": <HomeContentComponent />,
    "settings": <SettingsPageComponent/>,
  }


  return (
    <>
      <NavbarComponent setPageContent={setPageContent}/>
      {components[pageContent]}
    </>
  )
}

export default App

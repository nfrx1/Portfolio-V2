import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Home from './Components/Main/Home';
import Projects from './Components/ِProjects/Projects';

const App = () => {
  const [tab, setTab] = useState("Home")
  return (
    <>
      <NavBar tab={tab} setTab={setTab} />
      {tab=="Home"?<Home />:tab=="About"?<About />:<Projects />}
    </>
  )
}

export default App
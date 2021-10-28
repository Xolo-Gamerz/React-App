import './App.css';
import Navbar from './components/Navbar.js'
import TextArea from './components/TextArea'
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      let colorProp = document.getElementById("colorProp")
      colorProp.style.color = 'white'
      let previewColor = document.getElementById("previewColor")
      previewColor.style.color = 'white'
      let navMode = document.getElementById("mode")
      navMode.innerText = "Disable Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      let colorProp = document.getElementById("colorProp")
      colorProp.style.color = 'black'
      let previewColor = document.getElementById("previewColor")
      previewColor.style.color = 'black'
      let navMode = document.getElementById("mode")
      navMode.innerText = "Enable Dark Mode"
    }
  }
  return (
    <>
    <Navbar title = "REACT" drop1 = "Node.js" drop2 = "React.js" drop3 = "Javascript" mode = {mode} toggleMode = {toggleMode}/>
    <div className = "container">
    <TextArea heading = "ENTER TEXT BELOW"/>
    </div>
    <div className = "container my-3">
    </div>
    </>
  );
}

export default App;

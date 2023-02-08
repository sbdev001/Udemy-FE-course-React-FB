import './App.css'
//import Title from './components/Title'
//import Modal from './components/Modal'
//import EventList from './components/EventList'
//import { MathJax, MathJaxContext } from "better-react-mathjax"
import { Mafs, Coordinates } from "mafs"
//import React, { useState } from 'react'
 

function App() {


  return (
    <div className="App">
      <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
    </div>
  );
}

export default App;

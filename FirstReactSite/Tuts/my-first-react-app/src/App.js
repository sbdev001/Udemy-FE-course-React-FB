import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import './components/Modal.css'
//import './components/Themes.js'
//import Modal from './components/Modal'
import { Box, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Modal from '@mui/material/Modal'
import EventList from './components/EventList'
import { MathJax, MathJaxContext } from "better-react-mathjax"
import './components/Question.js'
import { palette, positions } from '@mui/system';
//import Question from './components/Question.js'
import Question from './components/QuestionGeneric.js'
import Questions from './data/Quiz.json';
import Quiz from './components/Quiz'
//import { Fade } from '@material-ui/core'


function App() {

  const [showModal, setShowModal] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [showEvents, setShowEvents] = useState(false)

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return (event.id !== id)
    })
  })
    console.log(id)
  }

/*  const handleClose = () => {
    setShowModal(false)
  }
*/
  const handleShowModal = () => {
    setShowModal(true)
  }


  const st = "Units in Algebra 2"
  const st2 = "Units in Pre-calc"

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const modalbox = {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bgcolor: 'grey.200',
      opacity: 1,
  }
  
//  <Quiz questions={Questions}> </Quiz>

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Title title="Algebra 2" subtitle={st} />

      <br />
      <br></br>

      <Button variant='contained' onClick={handleOpen}>Start Quiz</Button>
      <Modal 
        open={open}
        onClose={handleClose}
      >
      <Box sx={modalbox}>
        <Quiz questions={Questions}></Quiz>
  
        <br></br>
        <Button variant='outlined' onClick={handleClose}>Close</Button>
      </Box>

      </Modal>

      <p></p>
      
      <p></p>

 

      
      </ThemeProvider>
    </div>
  );
}

//        <Question question={Questions[0]}></Question>
/*
{showEvents && (
  <div>
    <button onClick={() => setShowEvents(false)}>hide events</button>
  </div>
)}
{!showEvents && (
  <div>
    <button onClick={() => setShowEvents(true)}>show events</button>
  </div>
)}

{showEvents && <EventList events={events} handleClick={handleClick} />      
} 
*/

export default App;

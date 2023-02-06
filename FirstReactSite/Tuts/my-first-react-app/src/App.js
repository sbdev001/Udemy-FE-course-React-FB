import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {

  const [showModal, setShowModal] = useState(false)

  const [showEvents, setShowEvents] = useState(true)

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

  const handleClose = () => {
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }


  const st = "Units in Algebra 2"
  const st2 = "Units in Pre-calc"


  return (
    <div className="App">

      <Title title="Algebra 2" subtitle={st} />
      <Title title="Pre-calc" subtitle={st2} />

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

      <br />
      <br></br>
      <button onClick={handleShowModal}>Show Modal</button>
      {showModal && <Modal handleClose={handleClose}>
        <h1>10% off Coupon Code!</h1>
        <p>Use the code Ninja at checkout</p>
      </Modal>
      }
    </div>
  );
}

export default App;

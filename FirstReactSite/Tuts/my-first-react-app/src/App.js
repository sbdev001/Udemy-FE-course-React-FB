import './App.css'
import { useState } from 'react'
import Title from './components/Title'

function App() {

  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return (event.id !== id)
    })
  })
    console.log(id)
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
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;

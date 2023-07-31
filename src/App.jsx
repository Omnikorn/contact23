
import './App.css';
import Appointments from './components/Appointments';
import { useState } from "react"
import Contacts from './components/Contacts';

function App() {

  // create a state for contacts and updateing contact
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Harith Albadry",
      email: "hh@h2.com",
      phone: 554455
    }, {
      id: 2,
      name: "David Tasker",
      email: "dd@h2.com",
      phone: 334433
    },
    {
      id: 3,
      name: "Kiki",
      email: "KK@h2.com",
      phone: 33444783
    }
  ])
  // create a state for appointms and updateing appointment

  const [appointments, setappo] = useState([{
    text:"fix my teeth",
    id:1,
    with:"contact",
    date:"13/2/43",
    time:"10pm"
  },{
    text:"feed the beast",
    id: 2,
    with: "kiki",
    date: "14/8/09",
    time: "11am"
  }])
  // create a function to add a contact
  //create a function to add an app
  // create a func to delete an appointment 
const [query, setQuery] = useState("")              


  return (
    <div className="App">
      
      <Appointments appointments={appointments}/>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;

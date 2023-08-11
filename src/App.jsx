
import './App.css';
import Appointments from './components/Appointments';
import { useState } from "react"
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';

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
    who:"contact",
    date:"13/2/43",
    time:"10pm"
  },{
    text:"feed the beast",
    id: 2,
    who: "kiki",
    date: "14/8/09",
    time: "11am"
  }])
  // create a function to add a contact

  const addContact = (contact) =>{
    const id = Math.floor(Math.random()*10000)+1
    const newContact = {id, ...contact}
    setContacts([...contacts, newContact])
  } 
  //create a function to add an app

  const addAppointment = (appointment) =>{
    const id = Math.floor(Math.random()*10000)+1
    const newApp ={id, ...appointment}
    setappo([...appointments,newApp])
  }
  // create a func to delete an appointment 
             


  return (
    <Routes >
    
     <Route path='/' element={<NavBar />} >

        <Route index path="contacts" element={<Contacts 
        contacts={contacts} onAdd={addContact}/>} />
        <Route path='appointments' element={<Appointments appointments={appointments} onAdd={addAppointment}/>} />


      </Route> 
    </Routes>
  );
}

export default App;

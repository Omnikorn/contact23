import React from 'react'
import ContCard from './ContCard'

const Contacts = ({contacts}) => {

    // create a search method for contact
  return (
    <>
      {contacts.map((contact)=>{ return (<ContCard contact={contact} key={contact.id}/>)})}  
    </>
  )
}

export default Contacts
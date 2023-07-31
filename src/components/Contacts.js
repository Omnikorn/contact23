import React from 'react'
import ContCard from './ContCard'

const Contacts = ({contacts}) => {

    // create a search method for contact
  return (
    <div>
        <div>
            {/* <input type='text'></input> */}
            <button>Add contact</button>
        </div>
      {contacts.map((contact)=>{ return (<ContCard contact={contact} key={contact.id}/>)})}  
    </div>
  )
}

export default Contacts
import React from 'react'
import ContCard from './ContCard'
import { useState } from 'react'


const Contacts = ({contacts, onSearch}) => {
const [query, setQuery] = useState("")  
    // create a search method for contact
  return (
    <div>
        <div>
          <button>Add contact</button>
        </div>
       <div>
       <input type="text" placeholder='Search' className='search' onChange={(e)=>{setQuery(e.target.value)}}/>
       </div>
      {contacts.filter((contact)=>contact.name.toLowerCase().includes(query)).map((contact)=>{ return (<ContCard contact={contact} key={contact.id}/>)})}  
    </div>
  )
}

export default Contacts
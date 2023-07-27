import React from 'react'

const ContCard = ({contact}) => {
  return (
    <div>
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
    </div>
  )
}

export default ContCard
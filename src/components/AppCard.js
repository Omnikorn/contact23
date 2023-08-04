import React from 'react'

const AppCard = ({appointmnet}) => {
  return (
    <div>
      <h2>{appointmnet.text}</h2>
      <p>with {appointmnet.who} at {appointmnet.time}</p>


    </div>
  )
}

export default AppCard
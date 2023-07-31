import React from 'react'

const AppCard = ({appointmnet}) => {
  return (
    <div>
      <h2>{appointmnet.text}</h2>
      <p>with {appointmnet.with} at {appointmnet.time}</p>


    </div>
  )
}

export default AppCard
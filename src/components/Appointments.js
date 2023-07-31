import React from 'react'
import AppCard from './AppCard'

const Appointments = ({appointments}) => {
  return (
    <>
    {appointments.map((appointment=>{
      return (<AppCard appointmnet={appointment} key={appointment.id}/>)
    }))}
    </>
  )
}

export default Appointments
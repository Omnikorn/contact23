import React from 'react'
import AppCard from './AppCard'
import AddApoint from './AddApoint'

const Appointments = ({appointments,onAdd}) => {
  return (
    <>
    <AddApoint onAdd={onAdd} />
    {appointments.map((appointment=>{
      return (<AppCard appointmnet={appointment} key={appointment.id}/>)
    }))}
    </>
  )
}

export default Appointments
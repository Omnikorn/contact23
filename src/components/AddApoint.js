import React, { useState } from 'react'

const AddApoint = ({onAdd}) => {
    const [text,setText] = useState("")
    const [date,setDate] = useState ("")
    const [time,setTime] = useState("")
    const [who,setWho] = useState("")

    const onSubmit = (e)=>{
        e.preventDefault()
        if (!text){
            alert("insert text please")
            return
        }

        onAdd({text,date,time,who})
        setText("")
        setDate("")
        setTime("")
        setWho("")
    }


  return (
    <form onSubmit={onSubmit}>
    <div>
        <labele>text</labele>
        <input type="text" placeholder='App details' value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
    <div>
        <labele>date</labele>
        <input type="text" placeholder='When' value={date} onChange={(e)=>setDate(e.target.value)}/>
    </div>
    <div>
        <labele>time</labele>
        <input type="text" placeholder='what time' value={time} onChange={(e)=>setTime(e.target.value)}/>
    </div>
    <div>
        <labele>who</labele>
        <input type="text" placeholder='who with' value={who} onChange={(e)=>setWho(e.target.value)}/>
    </div>
    <input type='submit' value="save" className='btn' />

    </form>
  )
}

export default AddApoint
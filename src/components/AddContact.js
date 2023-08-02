
import { useState } from "react"

const AddContact = ({onAdd}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const onSubmit =(e) => {
        e.preventDefault()

        if(!name) {
            alert("please add name")
            return
        }

        onAdd({name,phone,email})
        setName("")
        setEmail("")
        setPhone("")
    }

  return (
    <form  onSubmit={onSubmit}>
        <div className="form-control">
            <label>Name</label>
            <input type="text" placeholder="Add Contact"
            value={name} 
            onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-control">
            <label>email</label>
            <input type="text" placeholder="Add Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
          <div className="form-control form-control-check">
              <label>Phone</label>
              <input type="text" placeholder="Add Phone number" 
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}/>
              
          </div>
          <input type="submit" value="Save" className="btn btn-block"/>
    </form>
  )
}

export default AddContact
import {Fragment} from 'react'
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
    <div>
        <Link className='nav-link' to={"/"}>Home</Link>
        <Link className="nav-link" to="/appointments">
            Appointments 
        </Link>
        <Link className="nav-link" to="/contacts">
            Contacts
        </Link>
    </div>
    <Outlet />
    </Fragment>
  )
}

export default NavBar
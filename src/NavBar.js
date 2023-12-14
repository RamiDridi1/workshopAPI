import React from 'react'
import{Link} from "react-router-dom"
function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/"><h1>Home</h1></Link>
     <h1  ><Link to="/list"> userList</Link></h1>
    </div>
  )
}

export default NavBar

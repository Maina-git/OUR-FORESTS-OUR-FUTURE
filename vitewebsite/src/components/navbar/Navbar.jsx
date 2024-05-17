import React from 'react'
import "./Navbar.css"



function Navbar({count, setCount}) {


  return (
    <div className="navbar">
      <div className="text">
        Pplanner
      </div>

      <nav className="navlinks">
        <li  onClick={()=>{setCount(0)}} className={count==0 ? "orange" : "white"}>HOME</li>
        <li  onClick={()=>{setCount(1)}}  className={count==1 ? "orange" : "white"}>ABOUT</li>
        <li onClick={()=>{setCount(2)}} className={count==2 ? "orange" : "white"}>SERVICES</li>
        <li  onClick={()=>{setCount(3)}} className={count== 3 ? "orange" : "white"}>CONTACTS</li>
      </nav>
    </div>
  )
}

export default Navbar;











import React, { useEffect } from 'react'
import './Navbar.css'
import SideBarButton from './SideBarButton'
import {BsFillCartCheckFill} from "react-icons/bs"

import {FaPizzaSlice} from "react-icons/fa"
const Navbar = () => {
  return (
    <>
   <div className="main-nav">
   <div className="logo">
   <h1><span>v</span>ikash
   <FaPizzaSlice/>
   <span> </span>Pizza
   </h1>

   </div>
   
   
<div className="menu-link">


    
  <SideBarButton  title="Home" to="/"  />
    <SideBarButton  title="Menu" to="/Menu"   />
    <SideBarButton title="Orders" to="/Orders" />
    <SideBarButton title="Cart" to="/Cart" />
    <SideBarButton title="Logout" to="/Logout" / >
    

</div>



   </div>


   
    
    
    
    </>
  )
}

export default Navbar
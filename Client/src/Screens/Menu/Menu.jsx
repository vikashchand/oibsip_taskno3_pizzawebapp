import React from 'react'
import AllPizza from "../../pizaa-data"
import '../Menu/Menu.css'

import Pizza from '../../Components/Pizza/Pizza'

const Menu = () => {
  return (
  
      <div className="datapizza">
        {AllPizza.map((pizza, index) => (
         
            <Pizza pizza={pizza} />
         
        ))}

        </div>
     
 
  )
}

export default Menu

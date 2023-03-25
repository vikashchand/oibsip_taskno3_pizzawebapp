
import React , { useState, useEffect }  from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import allpizza from '../../pizaa-data';

import  Pizza  from '../../Components/Pizza/Pizza';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../../Components/About/About';
import Menu from  '../Menu/Menu'


const Home = () => {
  return (
    <Router>
    <Navbar/>
        <div className="main-container">
            
            
            
        <Routes>
            

            <Route path='/' element={<About/>} />
           
            <Route path='/Menu' element={<Menu/>} />

        </Routes>
        </div>
    </Router>
  );
};

export default Home
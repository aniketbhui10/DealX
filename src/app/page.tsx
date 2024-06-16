"use client"
import React from 'react'
import Howitworks from "@/app/Pages/Howitworks"
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home  from "@/app/Pages/Home";
import Resultp  from "@/app/Pages/Resultp";





const page=()=>{
  return(

    
    
    
    <Router>
      <Routes>
        <Route  path ='/' element={<Home/>}/>
        <Route path='/Howitworks' element={<Howitworks/>}/>
        <Route path ='/Resultp' element={<Resultp/>}/>
      </Routes>

    </Router>
    
    
    
  )
  
}
export default page 
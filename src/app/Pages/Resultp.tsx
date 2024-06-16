"use client"
import React from 'react';
import Container from "@/app/Components/Container"
import Table from "@/app/Components/Table"
import Container2 from "@/app/Components/Container2"
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home  from "@/app/Pages/Home";
import {slides} from "@/app/carouselData.json"



const Resultp=()=>{
    <Router>
      <Routes>
        <Route path ='/' element={<Home/>}/>

        
      </Routes>

    </Router>
    return(
        <>
        
        
        <Container/>
        <Table/>
        
        

        </>
    )
}

export default Resultp
"use client"
import React from 'react'

import Container from "@/app/Components/Container"

import Container2 from "@/app/Components/Container2"

import {CookiesProvider} from "react-cookie";
import {slides} from "@/app/carouselData.json";



const Home=()=>{
  return(
    
    <>
    <CookiesProvider>
    
    
    
    <Container/>
    <div className=' text-white p-4'> </div>
    
    
    


    <Container2 data={slides}/>
    
    </CookiesProvider>
    
    
    
    </>
  )
  
}
export default Home
import Link from "next/link";
import React from "react";

const Header=() =>{
    return(
        <>




        <div className='h-20 bg-yellow-500 text-centre font-bold flex items-center justify-between p-8'>

        <div>
            
           <Link href="#/">Home</Link> 
            
            
            </div>    
        <div>  <img className="h-auto max-w-xs " src="/Logo.png"></img></div>
            

            <div>

        <Link href="#/Howitworks">How it works?</Link>
                
            </div>
            
           
        </div>
        

        </>
    )
}
export default Header
import React, { Fragment } from 'react'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"

const About
 = () => {
    return (
        <div id="section5" className="container" style={{ backgroundColor:"#d3d3d34d",padding: "50px"}}>
           
        <div className="grid-2 application" style={{margin:"45px 45px"}}>
            
             <div style={{marginTop: "-30px"}}>
                 <h1>About <red style={{color:"red"}}>XIDAS IOT</red></h1>
                 <div>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                     facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                     minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                 lique et vitae harum natus minima!</p>
                 </div>
             </div>
             <div className="img-placeholder">
                 <img src={image} alt="..." style={{width:"100%"}} />
             </div>
         </div>
         <div className="grid-2 application" style={{margin:"85px 45px"}}>
         <div className="img-placeholder">
                 <img src={image} alt="..." style={{width:"100%"}} />
             </div>
            
             <div style={{marginTop: "-30px"}}>
                 <div>
                     <h1>About XIDAS  </h1>
                     <div>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                         facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                         minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                         lique et vitae harum natus minima!</p>
                     </div>
                     
                 </div>
                 <a href="#" className="button" style={{backgroundColor:"red",border:"none",width:"200px"}}>Got to Xidas.com</a>
             </div>

             
         </div>
     </div>
    )
}

export default About

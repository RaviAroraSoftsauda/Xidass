import React from 'react'
import IconsWithName from '../utils/IconsWithName'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
const Section = () => {
    return (
        <div id="section5" className="container" style={{ backgroundColor:"#d3d3d34d",padding: "50px"}}>
           
           <div className="grid-2 application" style={{margin:"45px 45px"}}>
                <div className="img-placeholder">
                    <img src={image} alt="..." style={{width:"100%"}} />
                </div>
                <div style={{marginTop: "-30px"}}>
                    <h1>About XIDAS IOT  </h1>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                        facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                        minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                    lique et vitae harum natus minima!</p>
                    </div>
                </div>
            </div>
            <div className="grid-2 application" style={{margin:"85px 45px"}}>
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
                    <a href="#" className="button">Got to Xidas.com</a>
                </div>

                <div className="img-placeholder">
                    <img src={image} alt="..." style={{width:"100%"}} />
                </div>
            </div>
        </div>
    )
}

export default Section
import React, { useState, useRef, useEffect, useCallback, Fragment } from 'react'
import IconsWithName from '../utils/IconsWithName'
import HighPower from "./../../assets/Page2Animation/highpower.webm"
import SmallSize from "./../../assets/Page2Animation/smallsize.webm"
import IndustrialRugged from "./../../assets/Page2Animation/industrial.webm"
import PlugPlay from "./../../assets/Page2Animation/plugplay.webm"
import icoHighPower from "../../assets/icon/highpoweroutput.png";
import icoIndustrialRuggred from "../../assets/icon/industrial:rugged.png"
import iconPlugPlay from "../../assets/icon/plugandplay.png"
import icoSmallSize from "../../assets/icon/smallsize.png"

const Section3 = () => {

    const [image, setimage] = useState(HighPower)

    return (
        <Fragment>
            <div id="page2-section3" className="section">
                <div className="menu-bar-2 container" >
                    <div onClick={() => setimage(HighPower)}>
                        <IconsWithName className="highlight" text="high power output" color="transparent"  image={icoHighPower} width="30%" spanclass="menu-title"/>
                    </div>

               
                <div onClick={(e) => { console.log(image); setimage(SmallSize); }}>
                    <IconsWithName className="highlight" text="small size" color="transparent"  image={ icoSmallSize} width="30%" spanclass="menu-title"/>
                </div>

           
            <div onClick={() => setimage(IndustrialRugged)}>
                <IconsWithName className="highlight" text="industrial / rugged" color="transparent"  image={icoIndustrialRuggred} width="30%" spanclass="menu-title"/>

            </div>
                   
      
        <div onClick={() => setimage(PlugPlay)}>
            <IconsWithName className="highlight" text="plug & play" color="transparent"  image={iconPlugPlay} width="30%" spanclass="menu-title"/>

        </div>
                    
                </div >
           


    <video autoPlay muted style={{ width: '100vw', height: "75vh", margin: '0px' }} src={image}>

    </video>
        </div >
       
        </Fragment >
         )
}

export default Section3

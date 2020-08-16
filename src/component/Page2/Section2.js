import React from 'react'
import Image1 from './../../assets/Copy of Faraday Final Render (fileted) picture 2.2.png'


const Section2 = () => {
    return (<>
   
    <div id="page2-section2" className="section">
    
            <img src={Image1} alt="..." style={{ width: '75vw',height:'70vh',
            backgroundColor:"#3e3e45",
            marginLeft: "25%"}} />
            <div className="dark-overlay"></div>
            <div className="overview-ovrelay-text">
                <h1>upto 20+ years of life time of wireless sensor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nemo eos quas voluptates veritatis odit aut quibusdam
                  totam cupiditate fugit suscipit.</p>
            </div>
        </div>
    
    </>
        
    )
}

export default Section2;

import React, { useLayoutEffect, useState, Fragment } from 'react'

import Imagebg from './../assets/Homepage Animation Turn.mp4'
import ImageBg1 from './../image/Exports/Homepage Animation Turn (original) (2).mp4'
const Section1 = (props) => {

    const [opacity, setOpacity] = useState("0");

    const addopacity = () => {
        setTimeout(() => {
            setOpacity("1");
        }, 5000)
    }
    useLayoutEffect(() => {

        addopacity();

    }, [])
  
    return (
        <Fragment>
            <div id="section1">
                <video autoPlay={true} muted style={{ width: '100%', margin: '0px' }}>
                    <source src={Imagebg} type="video/mp4" />
                </video>

                <div className="text-overlay" style={{ opacity: opacity }}>
                    <h1>Everyone wants to live forever</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. eius quosadipisicing elit. Ea iure tempore saepe eius quos
                    non veniam optio quas natus quis rem beatae possimus
                 amet accusantium uptatem , obcaecati cupiditate!</p>
                    <button className="button" onClick={()=>props.history.push("/power")}><strong>Buy  Now</strong></button>
                </div>

            </div>
        </Fragment>

    )
}

export default Section1


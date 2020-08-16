import React from 'react'
import logo from "../../assets/VP3 logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Section1 = () => {
    return (
        <div className="stripe" id="page2-section1">
            <div><button className="brand-btn" style={{ borderStyle: "none" }}><img src={logo} alt="..." style={{ width: "100%" }} /></button></div>

            <div >

                <AnchorLink offset='110' className="stripebtn page2-section3" href='#page2-section3'>overview</AnchorLink>
            </div>
            <div >

                <AnchorLink offset='110' className="stripebtn page2-section4" href='#page2-section4'>specs</AnchorLink>
            </div>
            <div >

                <AnchorLink offset='110' className="stripebtn page2-section5" href='#page2-section5'>applications</AnchorLink>
            </div>
            <div >
                <AnchorLink offset='110' className="stripebtn page2-section6 checkout-color" href="#page2-section6">buy</AnchorLink>
            </div>


        </div>
    )
}

export default Section1

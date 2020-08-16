import React from 'react'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
const Section = () => {
    return (
        <div className="checkout-page">
            <div className="app-header">
                <h1>Billing Information</h1>
            </div>
            <div className="grid-2">
            <form className="bill-info" style={{ opacity: '0.9', boxSizing: 'border-box', maxWidth: '70vw',marginLeft:"10%" }}>
            <div className="grid-2"> 
                <div className="form-group">
                    <input type="text" placeholder="First Name*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Confirm Email*" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Ext"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Company*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Attention"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Address Line 1*"  />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Address Line 2"  />
                </div><div className="form-group">
                    <input type="text" placeholder="City*"  />
                </div><div className="form-group">
                    <input type="text" placeholder="State*"  />
                </div><div className="form-group">
                    <input type="text" placeholder="Postal Code*"  />
                </div>
                
            </div>
            <div className="form-group">
                    <input type="submit" value="submit" />
                </div>
            </form>
            <div style={{width:"55vh",marginLeft:"25%"}}>
            <div className="app-header">
                <h1>Cart(1)</h1>
            </div>
            
            <div className="grid-3 cart">
                <div>
                    <img src={image} style={{width:"100%"}}/>
                </div>
                <div style={{ textAlign:"center"}}>
                    <h3>Product Title</h3>
                    <div className="number">
                                <span className="minus">-</span>
                                <input className="count" type="number" value="1"/>
                                <span className="plus">+</span>
                            </div>
                </div>
                <div style={{ textAlign:"center"}}>
                    <p>$150</p>
                </div>
            </div>

            <div className="grid-2" style={{padding:"30px",position: "relative",fontSize: "larger"}}>
                <div>
                    <p>Total Price:</p>
                </div>
                <div style={{textAlign:"right"}}>
                    <p>$180</p>
                </div>
            </div>
            </div>
                
            </div>        
            </div>
    )
}
export default Section
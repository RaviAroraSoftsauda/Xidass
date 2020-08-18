
import React, { useState, useEffect } from 'react';
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
import bouncer from "../../assets/Enclosure Animation Bop.webm"
import Select from 'react-select';
import {addItem} from "../../redux/actions/cartAction";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useHistory} from "react-router-dom"

const Buy = (props) => {
    let history= useHistory();
    return (
        <div id="page2-section6" className="container section" style={{ marginTop: '50px', height: "auto" }}>
            <div className="app-header" >
                <h1>Shop</h1>
            </div>
            <div className="grid-2 " style={{marginLeft:"-105px"}}>

                <div style={{ padding: "50px", textAlign: "center" }}>
                <video autoPlay loop muted src={bouncer} style={{width:"75%",height:"20vw",background: "#eee"}} />
                    <h4>Vibration Perpetual Power Pod VP3 – 30 Hz</h4>
                    <p style={{marginTop:"-10px"}}>$120</p>
           
                    <div style={{ marginTop: "20px" }}> 
                        <button className="checkout checkout-color" 
                        onClick={(e)=>{
                            history.push("/shops")
                            }}>Buy</button>
                    </div>
                </div>
                <div style={{ padding: "50px", textAlign: "center" }}>
                <video autoPlay loop muted src={bouncer} style={{width:"75%",height:"20vw",background: "#eee"}} />
                    <h4>Vibration Perpetual Power Pod VP3 – 60 Hz</h4>
                    <p style={{marginTop:"-10px"}}>$120</p>
                    <div style={{ marginTop: "20px" }}>
                        <button className="checkout checkout-color"  
                        onClick={(e)=>{
                            history.push("/shops")
                            }}>Buy</button>
                    </div>
                </div>
            </div>
          </div>
    )
}

Buy.propTypes = {
    addItem: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   item: state.cart.item,
   // errors: state.errors
});

export default connect(mapStateToProps,{addItem})(Buy)

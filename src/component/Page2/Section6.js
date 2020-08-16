
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import IconsWithName from '../utils/IconsWithName'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
import bouncer from "../../assets/Enclosure Animation Bop.webm"
import Select from 'react-select';
import {addItem} from "../../redux/actions/cartAction";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Section6 = (props) => {
    const options = [
        { value: '1.8V', label: '1.8V' },
           { value: '2.5V', label: '2.5V' },
           { value: '3.3V', label: '3.3V' },
    ]
   
    let [p1,setp1]=useState(1)
   let [p2,setp2]=useState(1)
   
   let [Option1,setOption1]=useState(options[0])
   let [Option2,setOption2]=useState(options[0])
   let product1 =
   {
       pname:"Vibration Perpetual Power Pod VP3 – 30 Hz",
       image:image,
       price:120,
       options:[
           { value: '1.8V', label: '1.8V' },
           { value: '2.5V', label: '2.5V' },
           { value: '3.3V', label: '3.3V' },
       ],
       value:p1
   };
   let product2 =
   {
       pname:"Vibration Perpetual Power Pod VP3 – 60 Hz",
       image:image,
       price:120,
       options:[
           { value: '1.8V', label: '1.8V' },
           { value: '2.5V', label: '2.5V' },
           { value: '3.3V', label: '3.3V' },
       ],
       value:p2
   };
   console.log(props);
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
                    <div className="grid-2" style={{ padding: "0px 10px" }}>
                        <div className="number">
                            <span className="minus" onClick={()=>{if(p1>1){setp1(p1-1)}}}>-</span>
                            <input className="count" type="number" value={p1} />
                            <span className="plus" onClick={()=>setp1(p1+1)}>+</span>
                        </div>
                        <div className="card-select" >
                        <Select
                            value={Option1}
                            onChange={(e)=>setOption1(e)}
                            options={options}
                            styles={{
                                option: (provided, state) => (
                                    {
                                    ...provided,
                                    color:"black",
                                    padding: 20,
                                    marginTop:-5,
                                    
                                    ':hover':{
                                        backgroundColor:"#5cdfb7",
                                        color:"white"
                                    },
                                    backgroundColor: state.isSelected ? "#5cdfb7" :"white"

                                    
                                  }
                                
                                ), menu: (provided, state) => ({
                                    ...provided,
                                    border: '2px solid lightgrey',
                                  }),
                              }}
                        />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <button className="checkout checkout-color" onClick={(e)=>{props.addItem(product1);props.openShow();}}>Add to Cart</button>
                    </div>
                </div>
                <div style={{ padding: "50px", textAlign: "center" }}>
                <video autoPlay loop muted src={bouncer} style={{width:"75%",height:"20vw",background: "#eee"}} />
                    <h4>Vibration Perpetual Power Pod VP3 – 60 Hz</h4>
                    <p style={{marginTop:"-10px"}}>$120</p>
                    <div className="grid-2" style={{ padding: "0px 5px" }}>
                        <div className="number">
                            <span className="minus" onClick={()=>{if(p2>1){setp2(p2-1)}}}>-</span>
                            <input className="count" type="number" value={p2} />
                            <span className="plus" onClick={()=>setp2(p2+1)}>+</span>
                        </div>
                        <div className="card-select">
                        <Select
                            value={Option2}
                            onChange={(e)=>setOption2(e)}
                            options={options}
                            styles={{
                                option: (provided, state) => (
                                    {
                                    ...provided,
                                    color:"black",
                                    padding: 20,
                                    marginTop:-5,
                                    
                                    ':hover':{
                                        backgroundColor:"#5cdfb7",
                                        color:"white"
                                    },
                                    backgroundColor: state.isSelected ? "#5cdfb7" :"white"

                                    
                                  }
                                
                                ), menu: (provided, state) => ({
                                    ...provided,
                                    border: '2px solid lightgrey',
                                  }),
                              }}
                        />
                        </div>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <button className="checkout checkout-color"  onClick={(e)=>{props.addItem(product1);props.openShow();}}>Add to Cart</button>
                    </div>

                </div>


            </div>
          </div>
    )
}

Section6.propTypes = {
    addItem: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   item: state.cart.item,
   // errors: state.errors
});

export default connect(mapStateToProps,{addItem})(Section6)

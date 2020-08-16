import React ,{useState,useEffect}from 'react'
import bouncer from "../assets/Enclosure Animation Bop.webm"

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {clearItem} from "../redux/actions/cartAction"
export const Cart = (props) => {
   
    let [p3,setp3]=useState(props.item.value)
    useEffect(() => {
        if (props.item.value) {
          setp3(props.item.value);
        }
      }, [props.item.value])
    console.log(p3);
    return(
            <div>
            <div className="app-header">
                <h1>Cart ({props.item.pname? "1":"0"})</h1>
            </div>
            <button className="modal-close" onClick={(e) =>{ 
                props.closeCart();
                props.clearItem();
                }} style={{ position: "absolute", right: "0", top: "45px", fontSize: "20px" }}>X</button>
            {
            props.item.pname &&
                <div className="grid-3 cart">
                    <div>
                    <video autoPlay loop muted src={bouncer} style={{width:"100%",background: "#eee"}} />
                    </div>
                    <div style={{ textAlign: "center" }}>
            <h3>{props.item.pname}</h3>
                        <div className="">
                            <span className="minus" onClick={()=>{if(p3>1){setp3(p3-1)}}}>-</span>
                            <input className="count" type="number" value={p3} />
                            <span className="plus" onClick={()=>setp3(p3+1)}>+</span>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
            <p>${props.item.price*p3}</p>
                    </div>
                </div>}

                
           
           
            <div className="grid-2" style={{ padding: "30px", borderTop: "1px solid grey", bottom: "65px", position: "absolute", fontSize: "larger",width: "-webkit-fill-available" }}>
                <div>
                    <p>Total Price:</p>
                </div>
                <div style={{ textAlign: "right",padding: "0px 45px"}}>
                    <p>${props.item.price*p3|| 0}</p>
                </div>
                <div>

                </div>
                <div style={{ marginTop: "20px",textAlign:"right" }}>
                    <button className="checkout checkout-color" onClick={()=>{props.togglemodal();props.closeCart();}} >Check Out</button>
                </div>
            </div>
       
               </div>
               
       
        
    )
}

Cart.propTypes = {
    clearItem: PropTypes.func.isRequired,
   cart: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   item: state.cart.item,
   // errors: state.errors
});

export default connect(mapStateToProps,{clearItem})(Cart)

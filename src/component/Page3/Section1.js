import React, { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from './../../usescrollposition/src/index.jsx'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
import blacklogo from "../../image/Exports/PNG/Logo_Xidas_IOT_full-color.png"
import Section from "./Section"
import Modal from 'react-modal';
import bouncer from "../../assets/Enclosure Animation Bop.webm"
import classnames from 'classnames';
import { propTypes } from 'react-bootstrap/esm/Image'
const customStyles = {
    content: {
        top: '70px',
        left:"auto",
        right: 'auto',
        bottom: 'auto',
        border:"none", 
        height:"91vh",
        width:"100vw"

    }
};
const Section1 = (props) => {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const options = [
        { value: '1.8V', label: '1.8V' },
        { value: '2.5V', label: '2.5V' },
        { value: '3.3V', label: '3.3V' },
    ]
    const [show, setshow] = useState(false);
   let [p3,setp3]=useState(1)
 
    function openModal() {
        setIsOpen(true);
       
        
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);

    }
    return (
        <div>
            <div className="app-header" style={{ backgroundColor: "white", height: "100px", padding: "10px 85px",display:"flex",alignItems:"center" }}>
                <h1>Shop</h1>
            </div>
            <div id="section6" className="container" >
                <div >
                    <h3>Power</h3>
                </div>
                <div className="grid-3 ">

                    <div style={{ padding: "50px", textAlign: "center",marginLeft:"-50px" }}>
                        <video autoPlay loop muted src={bouncer} style={{width:"100%",height:"20vw",background: "#eee"}} />
                        <h4>Vibration Perpetual Power Pod VP3 – 30 Hz</h4>
                        <p>$120</p>

                        <div style={{ marginTop: "20px" }}>
                            <button className="checkout checkout-color" onClick={openModal} >Buy</button>
                        </div>
                    </div>
                    <div style={{ padding: "50px", textAlign: "center",marginLeft:"-50px" }}>
                        <video autoPlay loop muted src={bouncer} style={{width:"100%",height:"20vw",background: "#eee"}} />
                        <h4>Vibration Perpetual Power Pod VP3 – 60 Hz</h4>
                        <p>$120</p>


                        <div style={{ marginTop: "20px" }}>
                            <button className="checkout checkout-color" onClick={openModal}>Buy</button>
                        </div>

                    </div>
                   
                </div>
             </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                <button className="modal-close" onClick={closeModal} style={{ position: "absolute", left: "145px", top: "45px",top: "40px",fontSize:"20px",zIndex:3 }}>X close</button>
                <Section  openShow={props.openShow}/>
            </Modal>
            <div className={classnames("sidenav", { show: show })}>
                <div className={classnames("hidden", { showbody: show })}>
                    <div className="app-header">
                        <h1>Cart (1)</h1>
                    </div>
                    <button className="modal-close" onClick={(e) => setshow(false)} style={{ position: "absolute", right: "0", top: "45px", fontSize: "20px" }}>X</button>
                    <div className="grid-3 cart">
                        <div>
                        <video autoPlay loop muted src={bouncer} style={{width:"100%",background: "#eee"}} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <h3>Product Title</h3>
                            <div className="">
                                <span className="minus" onClick={()=>{if(p3>1){setp3(p3-1)}}}>-</span>
                                <input className="count" type="number" value={p3} />
                                <span className="plus" onClick={()=>setp3(p3+1)}>+</span>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <p>$120</p>
                        </div>
                    </div>
                       <div>
                       <div className="grid-2" style={{ padding: "30px", borderTop: "1px solid grey", bottom: "65px", position: "absolute", fontSize: "larger",width: "-webkit-fill-available" }}>
                        <div>
                            <p>Total Price:</p>
                        </div>
                        <div style={{ textAlign: "right",padding: "0px 45px"}}>
                            <p>$180</p>
                        </div>
                        <div>

                        </div>
                        <div style={{ marginTop: "20px",textAlign:"right" }}>
                            <button className="checkout checkout-color">Check Out</button>
                        </div>
                    </div>
               
                       </div>
                     </div>

            </div>
        

        </div>
    )
}

export default Section1
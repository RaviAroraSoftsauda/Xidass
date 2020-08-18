import React from 'react'
import Product from "./Product"
import Modal from 'react-modal';
import bouncer from "../../assets/Enclosure Animation Bop.webm"
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
const Shop = (props) => {
   
    const [modalIsOpen, setIsOpen] = React.useState(false);
   
    function openModal() {
        setIsOpen(true); 
    }
    function closeModal() {
        setIsOpen(false);

    }
    return (
        <div>
            <div className="app-header" style={{ backgroundColor: "white", height: "100px", padding: "10px 85px",display:"flex",alignItems:"center" }}>
                <h1 style={{ marginBottom: 0 }}>Shop</h1>
            </div>
            <div id="section6" className="container" >
                <div >
                    <h3 style={{ marginTop: 0, marginBottom: 0 }}>Power</h3>
                </div>
                <div className="grid-2">

                    <div style={{ padding: "50px", paddingTop: 20, textAlign: "center",marginLeft:"-50px" }}>
                        <video autoPlay loop muted src={bouncer} style={{width:"100%",height:"20vw",background: "#eee"}} />
                        <h4>Vibration Perpetual Power Pod VP3 – 30 Hz</h4>
                        <p>$120</p>

                        <div style={{ marginTop: "20px" }}>
                            <button className="checkout checkout-color buy-botton" onClick={openModal} >Buy</button>
                        </div>
                    </div>
                    <div style={{ padding: "50px", paddingTop: 20,textAlign: "center",marginLeft:"-50px" }}>
                        <video autoPlay loop muted src={bouncer} style={{width:"100%",height:"20vw",background: "#eee"}} />
                        <h4>Vibration Perpetual Power Pod VP3 – 60 Hz</h4>
                        <p>$120</p>


                        <div style={{ marginTop: "20px" }}>
                            <button className="checkout checkout-color buy-botton" onClick={openModal}>Buy</button>
                        </div>

                    </div>
                   
                </div>
             </div>
                <Modal
                    isOpen={modalIsOpen}
                    //onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                <button className="modal-close" onClick={closeModal} style={{ position: "absolute", left: "145px", top: "45px",top: "40px",fontSize:"14px",zIndex:3 }}>X Close</button>
                <Product  openShow={props.openShow}/>
            </Modal>
        </div>
    )
}

export default Shop

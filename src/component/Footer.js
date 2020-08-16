import React, { Fragment } from 'react'
import image from './../image/Exports/PNG/Logo_Xidas_IOT_full-color.png'
const Footer = () => {
    return (

        <div className="footer">
            <div className="container">
                <div className="grid-3">
                    <div>
                        <img src={image} alt="....." style={{ width: '60%', marginTop: '20px', marginLeft: '40px', padding: '5px' }} />
                        <ul style={{ marginTop: '5px', opacity: '0.9' }}>
                            <li>info@xidas.com</li>
                            <li>(949) 930-0147</li>
                            <li>46  Waterworks  Way Irvine,CA,92618</li>
                        </ul>
                    </div>
                    <div className="grid-2 positionMiddle">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/power">Power</a></li>
                            <li><a href="/power#page2-section5">Applications</a> </li>
                            <li><a href="/shops">Shop</a></li>
                            <li>FAQ</li>
                        </ul>
                        <ul>
                            <li>Contact</li>
                            <li>Press</li>
                           

                        </ul>
                    </div>
                    <div>
                        <p style={{ margin: '25px auto 5px auto', fontSize: '18px', opacity: '0.9' }}>Subscribe to our news letter</p>
                        <form style={{ opacity: '0.9', boxSizing: 'border-box', maxWidth: '100%' }}>
                            <div className="form-group">
                                <input type="text" placeholder="Name" defaultValue="Full name" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" defaultValue="E-mail" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Company" defaultValue="Company" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Title" defaultValue="Title" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr style={{ width: '100%', boxSizing: 'border-box' }} />
            <p className="container"> <span style={{fontSize:"18px",position:"relative",top:"3px"}}>&#169;</span> 2020 Xidas Inc All Rights Reserved. </p>
        </div>


    )
}

export default Footer

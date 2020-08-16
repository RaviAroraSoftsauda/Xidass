import React, { useRef, useLayoutEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import white from './../image/Exports/PNG/Logo_Xidas_IOT_white_red-circle.png'
import black from './../image/Exports/PNG/Logo_Xidas_IOT_full-color.png'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from "../redux/actions/authAction"

const Header = (props) => {
  const togglemodal=()=>{
      console.log("in");
   }
   let auth;
   if(props.auth.isAuthenticated){
    auth=(<Link to="#"  >Hi,{props.auth.user.fname}
    </Link>)
   }else{
    auth=(<Link to="#"  onClick={props.togglemodal}>SIGN IN
                            </Link>)
   }
    if(props.background==="white"){

    }
    const path = useHistory();
    const pathname = path.location.pathname;

    const toggleMenu = useRef();
console.log(toggleMenu);
    const toggleMaxHeight = () => {
        if (!toggleMenu.current.style.maxHeight) {
            toggleMenu.current.style.maxHeight = "400px"
        } else {
            toggleMenu.current.style.maxHeight = ""
        }

    }
    console.log(props);
    return (
        <div id="header" className="header" style={{transition:"0.5s",position:props.position? "relative":"sticky"}}>
            <nav className="container" style={{ boxSizing: 'border-box' }}>
                <div className="brands">
                <Link to="/"><img src={black} alt="..." className="logo" /></Link>    
                </div>
                <div className="items hidemd" style={{marginLeft:"-10%"}}>

                    <ul>
                        <li>
                            <Link to="/" style={{ color: pathname === "/" ? 'red' : "" }}> HOME</Link>
                        </li>
                        <li>
                            <Link to="/power#page2-section3" style={{ color: pathname === "/power" ? 'red' : "" }}>POWER</Link>
                        </li>
                        <li>
                            <Link to="/power#page2-section5" style={{ color: pathname === "/power#page2-section5" ? 'red' : "" }}>APPLICATIONS</Link>
                        </li>
                        <li>
                            <Link to="/shops" style={{ color: pathname === "/shops" ? 'red' : "" }}>SHOP</Link>
                        </li><li>
                            <Link to="/about" style={{ color: pathname === "/about" ? 'red' : "" }}>ABOUT</Link>
                        </li>
                    </ul>
                </div>


                <div className="showmd">

                    <div style={{ boxSizing: 'border-box' }}>
                        <i className="fa fa-bars fa-2x"
                            style={{ display: 'inline-block', marginTop: '7px', color: '#D75440' }} onClick={toggleMaxHeight} />
                    </div>
                </div>
                <div className="hidemd" style={{marginLeft:"-10%"}}>
                    <ul>
                    <li>
                            {auth}
                        </li>
                        <li>
                            <Link to="#" onClick={(e)=>props.openCart()}><i className="fa fa-shopping-cart " style={{ fontSize: '20px', display: 'inline-block', padding: '6px', border: '1px solid black', borderRadius: '50%' }} />
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>

            <div className="toggle-menu" ref={toggleMenu} style={{ position: 'static', zIndex: '1000' }}>
                <ul>
                    <li>
                        <Link to="#"> HOME</Link>
                    </li>
                    <li>
                        <Link to="#">POWER</Link>
                    </li>
                    <li>
                        <Link to="#">APPLICATONS</Link>
                    </li>
                    <li>
                        <Link to="#">SHOPS</Link>
                    </li>

                </ul>
                <div>
                    <ul><li > <Link >SIGN IN</Link></li></ul>
                </div>
            </div>
           
        </div>
    )
}

Header.propTypes = {
   logoutUser:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{logoutUser})(Header)

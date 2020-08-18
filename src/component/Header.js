import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import black from "./../image/Exports/PNG/Logo_Xidas_IOT_full-color.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authAction";

const Header = (props) => {
  const toggleMenu = useRef();
  let location = useLocation();
  let auth = false;

  if (props.auth.isAuthenticated) {
    auth = <Link to="#">Hi,{props.auth.user.fname}</Link>;
  } else {
    auth = (
      <Link to="#" onClick={props.togglemodal}>
        SIGN IN
      </Link>
    );
  }

  const toggleMaxHeight = () => {
    let { maxHeight } = toggleMenu.current.style;
    if (maxHeight) {
      maxHeight = "";
    } else {
      maxHeight = "400px";
    }
  };

  const isCurrentPath = (pathInput) => {
    return `${location.pathname}${location.hash}` === pathInput;
  };

  return (
    <div
      id="header"
      className="header-component-wrapper header"
      style={{
        transition: "0.5s",
        position: props.position ? "relative" : "sticky",
      }}
    >
      <nav className="container" style={{ boxSizing: "border-box" }}>
        <div className="brands">
          <Link to="/">
            <img src={black} alt="..." className="logo" />
          </Link>
        </div>
        <div className="items hidemd" style={{ marginLeft: "-10%" }}>
          <ul>
            <li>
              <Link to="/" className={isCurrentPath("/") ? "selected" : null}>
                {" "}
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/power#page2-section3"
                className={
                  isCurrentPath("/power#page2-section3") ? "selected" : null
                }
              >
                POWER
              </Link>
            </li>
            <li>
              <Link
                to="/power#page2-section5"
                className={
                  isCurrentPath("/power#page2-section5") ? "selected" : null
                }
              >
                APPLICATIONS
              </Link>
            </li>
            <li>
              <Link
                to="/shops"
                className={isCurrentPath("/shops") ? "selected" : null}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isCurrentPath("/about") ? "selected" : null}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        <div className="showmd">
          <div style={{ boxSizing: "border-box" }}>
            <i
              className="fa fa-bars fa-2x"
              style={{
                display: "inline-block",
                marginTop: "7px",
                color: "#D75440",
              }}
              onClick={toggleMaxHeight}
            />
          </div>
        </div>
        <div className="hidemd" style={{ marginLeft: "-10%" }}>
          <ul>
            <li>{auth}</li>
            <li>
              <Link to="#" onClick={(e) => props.openCart()}>
                <i
                  className="fa fa-shopping-cart "
                  style={{
                    fontSize: "20px",
                    display: "inline-block",
                    padding: "6px",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="toggle-menu"
        ref={toggleMenu}
        style={{ position: "static", zIndex: "1000" }}
      >
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
          <ul>
            <li>
              {" "}
              <Link>SIGN IN</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(Header);
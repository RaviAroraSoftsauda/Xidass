    import React, { useState, useLayoutEffect } from 'react';
    import './App.css';
    import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
    import Modal from 'react-modal';
    import Home from './component/Home';
    import Header from "./component/Header"
    import Footer from "./component/Footer"
    import Page2 from './component/Page2/Page2';
    import './scss/main.scss'
    import Page3 from './component/Page3/Page3';
    import Page4 from './component/Page4/Page4';
    import Page5 from './component/Page5/Page5';
    import Page6 from './component/Page6/Page6';
    import page3v1 from './component/page3v1/page3v1';
    import Page2SubSec1 from './component/Page2/Page2SubSec1'
    import Page2SubSec2 from './component/Page2/Page2SubSec2'
    import Page2SubSec3 from './component/Page2/Page2SubSec3'
    import Register from "./component/register";
    import Signin from "./component/signin"
    import Dashboard from "./component/dashboard"
    import Cart from "./component/cart"
    import Test from './component/test'
    import store from "./redux/store"
    import { Provider } from 'react-redux';
    import classnames from 'classnames';
    const customStyles = {
      content: {
        top: '25%',
        left: "30%",
        right: 'auto',
        bottom: 'auto',
        border: "none",
        height: "auto",
        width: "auto"

      }
    };
    const customStyles1 = {
      content: {
        top: '25%',
        left: "35%",
        right: 'auto',
        bottom: 'auto',
        border: "none",
        height: "auto",
        width: "500px"

      }
    };
    function App() {
      const [show, setshow] = useState(false);
      const [loginmodalIsOpen, loginsetIsOpen] = useState(false);
      const [regmodalIsOpen, regsetIsOpen] = useState(false);
      const openShow =()=>{
        setshow(true);
      }
      
      const closeShow=()=>{
        setshow(false)
      }
      const logopenModal = () => {
        loginsetIsOpen(true);
      }

      function logcloseModal() {
        loginsetIsOpen(false);

      } const regopenModal = () => {
        regsetIsOpen(true);
      }

      function regcloseModal() {
        regsetIsOpen(false);

      }
     
      return (
        <Provider store={store}>
          <div style={{ margin: '0px' }}>

            <Router>
             <Header togglemodal={logopenModal}  openCart={openShow} closeCard={closeShow}/>
              <Switch>
              
                <Route exact path="/" component={Home} />
                <Route exact path="/power"  component={()=><Page2 openShow={openShow} closeShow={closeShow}/>} />
                <Route exact path="/shops" component={()=><Page3 openShow={openShow} />} />
                <Route exact path="/about" component={Page4} />
                <Route exact path="/checkout" component={Page5} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/page6" component={Page6} />
                <Route exact path="/page3v1" component={page3v1} />
                <Route exact path="/page2subsect1" component={Page2SubSec1} />
                <Route exact path="/page2subsect2" component={Page2SubSec2} />
                <Route exact path="/page2subsect3" component={Page2SubSec3} />
              </Switch>
              <Footer />
              <Modal
                isOpen={regmodalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={regcloseModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <button className="modal-close" onClick={regcloseModal} style={{ position: "absolute", right: "0", top: "0", fontSize: "20px" }}>X</button>
                {/* <Signin /> */}
                <Register  />
              </Modal>
              <Modal
                isOpen={loginmodalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={logcloseModal}
                style={customStyles1}
                contentLabel="Example Modal"
              >
                <button className="modal-close" onClick={logcloseModal} style={{ position: "absolute", right: "0", top: "0", fontSize: "20px" }}>X</button>
                {/* <Signin /> */}
                <Signin  openModal={regopenModal} closeModal={logcloseModal} />
              </Modal>
            
              <div className={classnames("sidenav", { show: show })}>
        <div className={classnames("hidden", { showbody: show })}>
         <Cart closeCart={(e)=>setshow(false)} togglemodal={logopenModal}/>
          </div>
          </div>
            </Router>

          </div>
        </Provider>
      );
    }



    export default App

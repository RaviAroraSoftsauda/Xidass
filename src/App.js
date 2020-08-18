import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Modal from 'react-modal';
import Home from './component/Home';
import Header from "./component/Header"
import Footer from "./component/Footer"
import Power from './component/Power/Power';
import './scss/main.scss'
import Shop from './component/Shop/Shop';
import About from './component/About/About';
import Checkout from './component/Checkout/Checkout';
import Billing from './component/Billing/Billing';
import Register from "./component/register";
import Signin from "./component/signin"
import Dashboard from "./component/dashboard"
import Cart from "./component/cart"
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
  const openShow = () => {
    setshow(true);
  }

  const closeShow = () => {
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
          <Header togglemodal={logopenModal} openCart={openShow} closeCard={closeShow} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/power" component={() => <Power openShow={openShow} closeShow={closeShow} />} />
            <Route exact path="/shops" component={() => <Shop openShow={openShow} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/billing" component={()=><Billing onLoad={setshow(true)}/>}  />
          </Switch>
          <Footer />
          <Modal
            isOpen={regmodalIsOpen}
            onRequestClose={regcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button className="modal-close" onClick={regcloseModal} style={{ position: "absolute", right: "0", top: "0", fontSize: "20px" }}>X</button>
            <Register />
          </Modal>
          <Modal
            isOpen={loginmodalIsOpen}
            onRequestClose={logcloseModal}
            style={customStyles1}
            contentLabel="Example Modal"
          >
            <button className="modal-close" onClick={logcloseModal} style={{ position: "absolute", right: "0", top: "0", fontSize: "20px" }}>X</button>
          
            <Signin openModal={regopenModal} closeModal={logcloseModal} />
          </Modal>
          <div className={classnames("sidenav", { show: show })}>
            <div className={classnames("hidden", { showbody: show })}>
              <Cart closeCart={(e) => setshow(false)} togglemodal={logopenModal} />
            </div>
          </div>
        </Router>
      </div>
    </Provider>
  );
}



export default App

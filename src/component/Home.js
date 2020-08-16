import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Section1 from './Section1'
import Section2 from './Section2'
import Modal from 'react-modal';
import Signin from "./signin"
import Register from "./register"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = (props) => {

    return (
        <div>
          
            <Section1 history={props.history}/>
            <Section2 history={props.history}/>
        
        </div>
    )
}
Home.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(Home)
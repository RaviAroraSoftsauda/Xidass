import React, {Component} from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {logoutUser} from "../redux/actions/authAction"

class Dashboard extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(<><h1>welcome to xidas</h1>
            <a href="/" className="checkout" onClick={this.props.logoutUser}>logout</a>
        </>)
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{logoutUser})(Dashboard)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logUser } from '../redux/actions/authAction';
import {Form,Row,Col,Alert} from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: "",
      i:0
    };
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  componentWillReceiveProps(nextProps) {

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
   
    this.props.logUser(userData,this.props.history);
    this.props.closeModal();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    console.log(this.props);
    return (
      <div className="login">
          <h1 className="display-4">Sign In</h1>
    
              <Form style={{padding:"30px"}} onSubmit={this.onSubmit}>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2" className="text-left">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="input" name="email" value={this.state.email} onChange={this.onChange}/>
                    </Col>
                    {errors.email && <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>}
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </Col>  
                    {errors.password && <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>}        
                    <Form.Text as={Col} className="text-right" style={{float: "right"}}>
                    <Link to="">Forgot Password?</Link>
                    </Form.Text>
                </Form.Group>
                <div>
                <button className="checkout" style={{marginLeft:"55px"}} onClick={()=>{this.props.openModal();this.props.closeModal();}}>CREATE ACCOUNT</button>
                <button className="checkout checkout-color" style={{marginLeft:"55px"}} type="submit" >LOG IN</button>
                </div>
                
            </Form>
           
      </div>
    );
  }
}



Signin.propTypes = {
    logUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{logUser})(withRouter(Signin))

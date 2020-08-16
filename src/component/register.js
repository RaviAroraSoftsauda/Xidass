import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { regUser } from "../redux/actions/authAction";
import { Form, Row, Col, Alert } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'


class Register extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: "",
            email: '',
            cemail: "",
            password: '',
            password2: '',
            errors: {}
        };
    }

    //   componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //       this.props.history.push('/dashboard');
    //     }
    //   }

      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            cemail: this.state.cemail,
            password: this.state.password,
            cpassword: this.state.cpassword
        };
        
        console.log(this.state);
        this.props.regUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        console.log(this.props,this.state);
        return (
            <div className="register">
                <h1 className="display-4">Create Account</h1>
                <div className="container">
                    <Form onSubmit={this.onSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control value={this.state.fname} name="fname" onChange={this.onChange} type="text" required />
                                    {errors.fname && <Form.Control.Feedback type="invalid">
                                        {errors.fname}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control value={this.state.lname} name="lname" onChange={this.onChange} type="text" required />
                                    {errors.lname && <Form.Control.Feedback type="invalid">
                                        {errors.lname}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={this.state.email} name="email" onChange={this.onChange} type="email" required />
                                    {errors.email && <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Confirm Email </Form.Label>
                                    <Form.Control value={this.state.cemail} name="cemail" onChange={this.onChange} type="email" required />
                                    {errors.cemail && <Form.Control.Feedback type="invalid">
                                        {errors.cemail}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control value={this.state.password} name="password" onChange={this.onChange} type="password" required />
                                    {errors.password && <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control value={this.state.cpassword} name="cpassword" onChange={this.onChange} type="password" required />
                                    {errors.cpassword && <Form.Control.Feedback type="invalid">
                                        {errors.cpassword}
                                    </Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="text-right">
                            <button type="submit" className="checkout checkout-color" >CREATE ACCOUNT</button>
                        </div>
                    </Form>

                </div>
            </div>
        );
    }
}

Register.propTypes = {
    regUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{regUser})(Register)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Row, Col, Accordion, Card } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'


class Billing extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: "",
            email: '',
            cemail: "",
            phone: '',
            extension: '',
           billing:{ 
                company: '',
                attention: '',
                address1: '',
                address2: '',
                city: '',
                zipcode: '',
                state: '',
                country: '',
            },
            shipping:{ 
                company: '',
                attention: '',
                address1: '',
                address2: '',
                city: '',
                zipcode: '',
                state: '',
                country: ''
            },
            errors: {}
        };
    }



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
            phone: this.state.phone,
            extension: this.state.extension,
            billing:{},
            shipping:{},
            shippingOption:"",


        };

        console.log(this.state);
        //this.props.regUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        console.log(this.props, this.state);
        return (
            <div className="register row container">
                <div className="container col-md-6">
                    <Form onSubmit={this.onSubmit}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Billing Information
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>First Name*</Form.Label>
                                                    <Form.Control value={this.state.fname} name="fname" onChange={this.onChange} type="text" required />
                                                    {errors.fname && <Form.Control.Feedback type="invalid">
                                                        {errors.fname}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Last Name*</Form.Label>
                                                    <Form.Control value={this.state.lname} name="lname" onChange={this.onChange} type="text" required />
                                                    {errors.lname && <Form.Control.Feedback type="invalid">
                                                        {errors.lname}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Email*</Form.Label>
                                                    <Form.Control value={this.state.email} name="email" onChange={this.onChange} type="email" required />
                                                    {errors.email && <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Confirm Email* </Form.Label>
                                                    <Form.Control value={this.state.cemail} name="cemail" onChange={this.onChange} type="email" required />
                                                    {errors.cemail && <Form.Control.Feedback type="invalid">
                                                        {errors.cemail}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>

                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Phone*</Form.Label>
                                                    <Form.Control value={this.state.phone} name="phone" onChange={this.onChange} type="phone" required />
                                                    {errors.phone && <Form.Control.Feedback type="invalid">
                                                        {errors.phone}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>extention</Form.Label>
                                                    <Form.Control value={this.state.extention} name="extention" onChange={this.onChange} type="password" />
                                                    {errors.extention && <Form.Control.Feedback type="invalid">
                                                        {errors.extention}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>company*</Form.Label>
                                                    <Form.Control value={this.state.company} name="company" onChange={this.onChange} type="password" required />
                                                    {errors.company && <Form.Control.Feedback type="invalid">
                                                        {errors.company}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>attention</Form.Label>
                                                    <Form.Control value={this.state.attention} name="attention" onChange={this.onChange} type="password" />
                                                    {errors.attention && <Form.Control.Feedback type="invalid">
                                                        {errors.attention}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Address Line 1*</Form.Label>
                                                    <Form.Control value={this.state.address1} name="address1" onChange={this.onChange} type="password" required />
                                                    {errors.address1 && <Form.Control.Feedback type="invalid">
                                                        {errors.address1}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Address Line 2</Form.Label>
                                                    <Form.Control value={this.state.address2} name="address2" onChange={this.onChange} type="password" />
                                                    {errors.address2 && <Form.Control.Feedback type="invalid">
                                                        {errors.address2}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>city*</Form.Label>
                                                    <Form.Control value={this.state.city} name="city" onChange={this.onChange} type="password" required />
                                                    {errors.city && <Form.Control.Feedback type="invalid">
                                                        {errors.city}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>zipcode*</Form.Label>
                                                    <Form.Control value={this.state.zipcode} name="zipcode" onChange={this.onChange} type="password" required />
                                                    {errors.zipcode && <Form.Control.Feedback type="invalid">
                                                        {errors.zipcode}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>state*</Form.Label>
                                                    <Form.Control value={this.state.state} name="state" onChange={this.onChange} type="password" required />
                                                    {errors.state && <Form.Control.Feedback type="invalid">
                                                        {errors.state}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>country*</Form.Label>
                                                    <Form.Control value={this.state.country} name="country" onChange={this.onChange} type="password" required />
                                                    {errors.country && <Form.Control.Feedback type="invalid">
                                                        {errors.country}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>

                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="save billing address" />
                                                </Form.Group>

                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Shipping Information
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>

                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="save billing address" />
                                                </Form.Group>

                                            </Col>
                                            <Col md={6}>

                                            </Col>
                                           
                                            <Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>company*</Form.Label>
                                                    <Form.Control value={this.state.company} name="company" onChange={this.onChange} type="password" required />
                                                    {errors.company && <Form.Control.Feedback type="invalid">
                                                        {errors.company}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>attention</Form.Label>
                                                    <Form.Control value={this.state.attention} name="attention" onChange={this.onChange} type="password" />
                                                    {errors.attention && <Form.Control.Feedback type="invalid">
                                                        {errors.attention}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Address Line 1*</Form.Label>
                                                    <Form.Control value={this.state.address1} name="address1" onChange={this.onChange} type="password" required />
                                                    {errors.address1 && <Form.Control.Feedback type="invalid">
                                                        {errors.address1}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>Address Line 2</Form.Label>
                                                    <Form.Control value={this.state.address2} name="address2" onChange={this.onChange} type="password" />
                                                    {errors.address2 && <Form.Control.Feedback type="invalid">
                                                        {errors.address2}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>city*</Form.Label>
                                                    <Form.Control value={this.state.city} name="city" onChange={this.onChange} type="password" required />
                                                    {errors.city && <Form.Control.Feedback type="invalid">
                                                        {errors.city}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>zipcode*</Form.Label>
                                                    <Form.Control value={this.state.zipcode} name="zipcode" onChange={this.onChange} type="password" required />
                                                    {errors.zipcode && <Form.Control.Feedback type="invalid">
                                                        {errors.zipcode}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>state*</Form.Label>
                                                    <Form.Control value={this.state.state} name="state" onChange={this.onChange} type="password" required />
                                                    {errors.state && <Form.Control.Feedback type="invalid">
                                                        {errors.state}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col><Col md={6}>
                                                <Form.Group controlId="formGroupEmail">
                                                    <Form.Label>country*</Form.Label>
                                                    <Form.Control value={this.state.country} name="country" onChange={this.onChange} type="password" required />
                                                    {errors.country && <Form.Control.Feedback type="invalid">
                                                        {errors.country}
                                                    </Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>

                                        </Row>


                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Delivery
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2" style={{padding:"30px 0px"}}>
                                    <Card.Body>
                                        
                                          <Row>
                                              <Col>
                                                <Form.Label >
                                                  Shipping Options: 
                                                </Form.Label>
                                                </Col>
                                                <Col>
                                                <Form.Control
                                                    as="select"
                                                    className="mr-sm-2"
                                                    id="inlineFormCustomSelect"
                                                    custom
                                                    >
                                                    <option value="0">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                </Col>
                                                </Row>   
                                       
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card> 
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Payment
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        <Form.Check type="radio" aria-label="radio 1" label="Debit/Credit Card" />
                                        <div className="container">
                                            <Form.Group controlId="formGroupEmail">
                                                <Form.Label>Card Number</Form.Label>
                                                <Form.Control value={this.state.fname} name="fname" onChange={this.onChange} type="text" required />
                                                {errors.fname && <Form.Control.Feedback type="invalid">
                                                    {errors.fname}
                                                </Form.Control.Feedback>}
                                            </Form.Group>

                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGroupEmail">
                                                        <Form.Label>expiry</Form.Label>
                                                        <Form.Control value={this.state.fname} name="fname" onChange={this.onChange} type="text" required />
                                                        {errors.fname && <Form.Control.Feedback type="invalid">
                                                            {errors.fname}
                                                        </Form.Control.Feedback>}
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="formGroupEmail">
                                                        <Form.Label>CVV</Form.Label>
                                                        <Form.Control value={this.state.lname} name="lname" onChange={this.onChange} type="text" required />
                                                        {errors.lname && <Form.Control.Feedback type="invalid">
                                                            {errors.lname}
                                                        </Form.Control.Feedback>}
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Form.Check type="radio" aria-label="radio 1" label="Paypal" />
                                        <Form.Check type="radio" aria-label="radio 1" label="Generate Quote"/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Form>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        );
    }
}

Billing.propTypes = {
    // regUser: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // auth: state.auth,
    //errors: state.errors
});

export default connect(mapStateToProps, {})(Billing)

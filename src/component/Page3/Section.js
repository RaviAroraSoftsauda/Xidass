import React, { Component } from "react";
import { section2Content, section1Content, section3Content } from '../utils/contentForDescriptiveNavigation'
import bouncer from "../../assets/Enclosure Animation Bop.webm"
import {addItem} from "../../redux/actions/cartAction"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers-srcset";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';
const options = [
    { value: '1.8V', label: '1.8V' },
    { value: '2.5V', label: '2.5V' },
    { value: '3.3V', label: '3.3V' },
]

 class Section extends Component {
    constructor() {
        super();
        this.state = {
            currentSection: 0,
            elementPosition: {},
            count: 0,
            quantity:1,
            selectedOption:options[0]
        };
        this.minus=this.minus.bind(this);
        this.plus=this.plus.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    changeCuurentSection = (section) => {
        this.setState({ currentSection: section });
    }
    wheel(e) {

        if (e.deltaY > 0) this.setState({ count: this.state.count + 1 });
        if (e.deltaY < 0) this.setState({ count: this.state.count - 1 });
        console.log(this.state.count%3);
        console.info('x' + e.deltaX);
        console.info('y' + e.deltaY);
        console.info('z' + e.deltaZ);
        console.info('mode' + e.deltaMode);
        switch (this.state.count % 3) {
            case -0:
            case 0: this.changeCuurentSection(0);
                break;
            case -1:    
            case 1: this.changeCuurentSection(1);
                break;
            case -2:    
            case 2: this.changeCuurentSection(2);
                break;
            default:
        }
    }
    plus(){
        this.setState({quantity:this.state.quantity+1});
    }
    minus(){
        if(this.state.quantity>1){
            this.setState({quantity:this.state.quantity-1});
        }
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        //console.log(`Option selected:`, selectedOption);
      };
    render() {
        const { currentSection,quantity,selectedOption } = this.state;
        console.log(this.props);
        return (
            <div  className="grid-2" >
                <div style={{display:"flex"}}>
                <video autoPlay loop muted src={bouncer} style={{width:"100%"}} />
                </div>
                <div className="containerfixed"  style={{width:"600px"}}>
                    <div style={{ padding: "10px 30px" }}>
                        <h3>Vibration Perpetual Power Pod VP3 – 30 Hz</h3>
                    </div>
                  <div style={{ }}>
                  <Tabs selectedIndex={this.state.currentSection}  onSelect={currentSection => this.setState({ currentSection })}>
                        <TabList>
                        <Tab>key feature</Tab>
                        <Tab>specification</Tab>
                        <Tab>supporting docs</Tab>
                        </TabList>
                    <div className="" >
                    <TabPanel>
                        <div className="content" style={{fontSize:"1rem"}}>
                            <p style={{ margin: '1rem 0px' }}>
                                {section1Content}
                            </p>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="content" style={{fontSize:"1rem"}}>
                            <p style={{ margin: '1rem 0px' }}>
                                {section2Content}
                            </p>
                        </div>
                        </TabPanel> 
                        <TabPanel>
                        <div className="content" style={{fontSize:"1rem"}}>
                            <p style={{ margin: '1rem 0px' }}>
                                {section3Content}
                            </p>
                        </div>
                        </TabPanel>
                    </div>
                        
                    </Tabs>
                   
                  </div>
                    <div className="grid-2" style={{ padding: "30px 50px" }}>
                        <div className="number">
                            <span className="minus" onClick={this.minus}>-</span>
                            <input className="count" type="number" value={quantity} />
                            <span className="plus" onClick={this.plus}>+</span>
                        </div>
                        <div >
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            styles={{
                                option: (provided, state) => (
                                    {
                                    ...provided,
                                    color:"black",
                                    padding: 20,
                                    marginTop:-5,
                                    
                                    ':hover':{
                                        backgroundColor:"#5CDFB7",
                                        color:"white"
                                    },
                                    backgroundColor: state.isSelected ? "#5CDFB7" :"white"

                                    
                                  }
                                
                                ), menu: (provided, state) => ({
                                    ...provided,
                                    border: '2px solid lightgrey',
                                  }),
                              }}
                        />
                        </div>


                    </div>
                    <div className="grid-3" style={{ padding: "30px", borderTop: "1px solid grey", bottom: "-380px", fontSize: "larger",fontWeight: "900" }}>
                        <div>
                            <p>Total Price:</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p>${120*quantity}</p>
                        </div>
                        
                        <div style={{ marginTop: "15px",textAlign:"right" }}>
                            <button className="checkout checkout-color" onClick={(e)=>{this.props.addItem(
                                {
                                    pname:"Vibration Perpetual Power Pod VP3 – 30 Hz",
                                    value:quantity,
                                    price:120,

                                    });this.props.openShow();}}>Add to Cart</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

Section.propTypes = {
    addItem: PropTypes.func.isRequired,
   cart: PropTypes.object.isRequired,
    //errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   item: state.cart.item,
   // errors: state.errors
});

export default connect(mapStateToProps,{addItem})(Section)
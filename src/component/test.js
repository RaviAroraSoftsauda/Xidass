import React,{Component} from "react";
import { section2Content, section1Content, section3Content } from './utils/contentForDescriptiveNavigation'

import Image1 from '../image/Exports/PNG/FaradayHomePicmin.png'
import Image2 from '../image/Exports/PNG/Logo_Xidas_IOT_full-color.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Controller, Scene } from 'react-scrollmagic';
import image from "../assets/Page2Animation/Exploded.webm"
import { VideoScroll } from 'react-video-scroll';
const setStyles = (wrapperEl, videoEl, playbackRate) => {
    wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
    wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
  }

  const setFrame = (props) => {
    //  console.log(props);
    const { duration, playbackRate } = props
    //console.log(duration);
    //console.log((Math.round((window.pageYOffset / 15 - playbackRate)/duration)));
    return Math.round((window.pageYOffset / 15 - playbackRate)/duration)
  }
export default class Test extends Component{
    constructor() {
        super();
        this.state = {
         currentSection:0,
         elementPosition:{},
         image:Image1,
         count:0
        };
        this.changeCuurentSection=this.changeCuurentSection.bind(this);
      }
      componentDidMount() {
        window.addEventListener('scroll', this.onScroll.bind(this), true);
      }
     changeCuurentSection = (section) => {
        this.setState({currentSection:section});
    }
      
      onScroll(e){
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const pageY= window.pageYOffset*window.innerWidth;
       // const scrollTop = this.myRef.current.scrollTop
      //  console.log(`onScroll, window.scrollY: ${scrollY}`);
       // console.log("pageyoffset",pageY);
       
        if(window.innerWidth<750){
            console.log("in 1st");
            if(scrollY>2100){
                this.changeCuurentSection(0);
            }
            if(scrollY>2400){
                this.changeCuurentSection(1);
            }
            if(scrollY>2600){
                this.changeCuurentSection(2);
            }
          //  console.log(window.innerWidth);

        }
        if(window.innerWidth>750 && window.innerWidth<1300){
           // console.log("in 2nd");
            if(scrollY>1300){
                this.changeCuurentSection(0);
            }
            if(scrollY>1500){
                this.changeCuurentSection(1);
            }
            if(scrollY>1700){
                this.changeCuurentSection(2);
            }
            
          }
        
        
    if(window.innerWidth>1300){
        console.log("in 3rd");
        if(scrollY>1600){
            this.changeCuurentSection(0);
        }
        if(scrollY>2000){
            this.changeCuurentSection(1);
        }
        if(scrollY>2400){
            this.changeCuurentSection(2);
        }
        
      }

      
    }
      render(){
          const {currentSection}=this.state;
          return(
            <div id="page2-section4" className="section" >
            <div className="containerfixed grid-2" >
                <div >
                <Tabs selectedIndex={this.state.currentSection}  onSelect={currentSection => this.setState({ currentSection })}>
                        <TabList>
                        <Tab>key feature</Tab>
                        <Tab>specification</Tab>
                        <Tab>supporting docs</Tab>
                        </TabList>
                    
                        <TabPanel>
                        <div className="content">
                            <p style={{ margin: '1rem 0px' }}>
                                {section1Content}
                            </p>
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="content">
                            <p style={{ margin: '1rem 0px' }}>
                                {section2Content}
                            </p>
                        </div>
                        </TabPanel> 
                        <TabPanel>
                        <div className="content">
                            <p style={{ margin: '1rem 0px' }}>
                                {section3Content}
                            </p>
                        </div>
                        </TabPanel>
                    </Tabs>
                   </div>
                   {/* <video  muted style={{ width: '50vw', height: "30vh", margin: '0px' }} src={image} /> */}
                   <VideoScroll
                    // onLoad={props =>
                    //     console.log(props)
                    // }
                    setCurrentFrame={setFrame}
                    playbackRate={40}
                    //style={{ position: 'sticky' }}
                    >
                    <video
                        tabIndex="0"
                        autobuffer="autobuffer"
                        preload="preload"
                        style={{ width: '100%', objectFit: 'contain' }}
                        playsInline
                    >
                        <source type="video/mp4" src={image} />
                    </video>
                    </VideoScroll>
            
            </div>
            <div >
               
            </div>     
        </div>
          )
      }
}
 
import React from 'react'
import Header from './../Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section12 from "../page3v1/Section1"
import Footer from "../Footer"
import Test from "../test";

const Page2 = (props) => {
    console.log(props);
    function wheel(e) {
      //  console.log(e.deltaY);
       const nav = document.getElementsByClassName("header")
       const page2nav = document.getElementsByClassName("stripe")
      // nav.style.position="relative"
     // console.log(page2nav);
      
        
          if(e.deltaY>0){ 
              nav[0].setAttribute("style","position:relative");
             page2nav[0].setAttribute("style","position:sticky;");
            }
          if(e.deltaY<0){ 
                page2nav[0].setAttribute("style","position:relative");
              nav[0].setAttribute("style","position:sticky")
            }
       //   console.log(this.state.count%3);
       // console.info('x' + e.deltaX);
       // console.info('y' + e.deltaY);
       // console.info('z' + e.deltaZ);
       // console.info('mode' + e.deltaMode);
   //    switch(this.state.count%3){
   //     case -0:
   //         case 0: this.changeCuurentSection(0);
   //             break;
   //         case -1:    
   //         case 1: this.changeCuurentSection(1);
   //             break;
   //         case -2:    
   //         case 2: this.changeCuurentSection(2);
   //             break;
   //         default:
   //    }
     }
    return (
        <div style={{ scrollBehavior: "smooth"}} onWheel={wheel}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Test />
            <Section5 />
            <Section6 openShow={props.openShow}/>
        </div>
    )
}

export default Page2

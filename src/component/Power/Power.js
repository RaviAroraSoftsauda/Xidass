import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Overview from './Overview'
import Application from './Application'
import Buy from './Buy'
import Specs from "./Specs";

const Power = (props) => {
   
    function wheel(e) {
       const nav = document.getElementsByClassName("header")
       const page2nav = document.getElementsByClassName("stripe")
          if(e.deltaY>0){ 
              nav[0].setAttribute("style","position:relative");
             page2nav[0].setAttribute("style","position:sticky;");
            }
          if(e.deltaY<0){ 
                page2nav[0].setAttribute("style","position:relative");
              nav[0].setAttribute("style","position:sticky")
            }
     }
    return (
        <div style={{ scrollBehavior: "smooth"}} onWheel={wheel}>
            <NavBar />
            <Banner />
            <Overview />
            <Specs />
            <Application />
            <Buy openShow={props.openShow}/>
        </div>
    )
}

export default Power

import React, { Fragment } from 'react'
import Header from '../Header'
import Section1 from './Section1'
import Footer from "../Footer";

const Page3 = (props) => {
    return (
        <div>
            
            <Section1 openShow={props.openShow}/>
        
        </div>
    )
}

export default Page3

import React, { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from './../../usescrollposition/src/index.jsx'
import DescriptiveNavigation from '../utils/DescriptiveNavigation.js'
import { section2Content, section1Content, section3Content } from './../utils/contentForDescriptiveNavigation'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
const Section12 = () => {

    const [cuurentSection, setCurrentSection] = useState("link1");
    const [element1Position, setElement1Position] = useState({ x: 0, y: 0 });
    const elementRef1 = useRef()

    const changeCuurentSection = (section) => {
        setCurrentSection(section);
    }


    // Element scroll position
    useScrollPosition(
        ({ currPos }) => {
            setElement1Position(currPos);
        }, [], elementRef1
    )
    useEffect(() => {

        if (element1Position.y > -400) {
            setCurrentSection('link1');
        }
        else if (element1Position.y < -400 && element1Position.y > -800) {
            setCurrentSection("link2");
        } else {
            setCurrentSection("link3")
        }
    }, [element1Position.y])
    return (
        <div id="page3v1-section1" ref={elementRef1}>

            <div className="containerfixed">
                <TransitionGroup>
                    {cuurentSection === "link1" &&
                        <CSSTransition timeout={500} classNames="item">
                            <DescriptiveNavigation
                                content={section1Content}
                                activeLinkNo={1}
                                cb={changeCuurentSection}
                            />
                        </CSSTransition>
                    }
                </TransitionGroup>
                <TransitionGroup>
                    {cuurentSection === "link2" &&
                        <CSSTransition timeout={500} classNames="item">
                            <DescriptiveNavigation
                                content={section2Content}
                                activeLinkNo={2}
                                bgcolor=""
                                cb={changeCuurentSection}
                            />
                        </CSSTransition>
                    }
                </TransitionGroup>
                <TransitionGroup>
                    {cuurentSection === "link3" &&
                        <CSSTransition timeout={500} classNames="item">
                            <DescriptiveNavigation
                                content={section3Content}
                                activeLinkNo={3}
                                cb={changeCuurentSection}
                            />
                        </CSSTransition>
                    }
                </TransitionGroup>

            </div>
        </div>
    )
}

export default Section12
/*            <Scrollspy items={['sub-section1', 'sub-section2', 'sub-section3']}
                currentClassName="is-current" componentTag="div" offset=
                {-400}
                style={{ position: 'fixed', top: '100px' }}  >
                <li><a href="#sub-section1" id="1">section 1</a></li>
                <li><a href="#sub-section2" id="2">section 2</a></li>
                <li><a href="#sub-section3" id="3">section 3</a></li>
            </Scrollspy>
 */

/*
    const setLinkColor = () => {

       if (sec1.current.getBoundingClientRect().top > 0) {
           link1.current.classList.add("active");
       } else {
           link1.current.classList.remove("active");
       }
       if (sec2.current.getBoundingClientRect().top > 0 && sec1.current.getBoundingClientRect().top < 0) {
           link2.current.classList.add("active");
       } else {
           link2.current.classList.remove("active");
       }
       if ((sec1.current.getBoundingClientRect().top < 0) && (sec2.current.getBoundingClientRect().top < 0)) {
           link3.current.classList.add("active");
       } else {
           link3.current.classList.remove("active");
       }
   }
   */
import React from 'react'
import IconsWithName from '../utils/IconsWithName'
import image from "../../image/Exports/PNG/FaradayHomePicmin.png"
import motors from "../../assets/icon/FINAL_motors.png";
import pumps from "../../assets/icon/FINAL_pumps.png"
import compressors from "../../assets/icon/FINAL_compressors.png"
import chillers from "../../assets/icon/FINAL_chillers.png"
import gearboxes from "../../assets/icon/FINAL_gearboxes.png"
import fans_blowers from "../../assets/icon/FINAL_fans_blowers.png"
import conveyer_belts from "../../assets/icon/FINAL_conveyer_belts.png"
import automation from "../../assets/icon/FINAL_automation.png"
import app1 from "../../image/app1.png"
import app2 from "../../image/app2.png"
import app3 from "../../image/app3.png"
const Section5 = () => {
    return (
        <div id="page2-section5" className="container section" style={{ marginTop: '50px', backgroundColor:"#d3d3d34d",paddingTop: "50px"}}>
            <div className="app-header">
                <h1>Application</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, velit!</p>
            </div>
            <div className="grid-2 application">
                <div >
                    <h2>Power wireless sensor for machine condition monitoring <span>(predective maintainance )</span>   </h2>
                    <div className="grid-4">
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Motors" image={motors} width="30%"/></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Pumps" image={pumps} width="30%"/></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Compressors" image={compressors} width="30%" /></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Chillers" image={chillers} width="30%"/></div>
                    </div>
                    <div className="grid-4">
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Gearboxes" image={gearboxes}  width="30%"/></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Fans & blowers"image={fans_blowers} width="30%"/></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Conveyer Belts"image={conveyer_belts} width="30%"/></div>
                        <div style={{marginLeft:"-70px"}}><IconsWithName color="transparent" text="Automation" image={automation} width="30%" /></div>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                        facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                        minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                        lique et vitae harum natus minima!</p>
                    </div>
                </div>

                <div >
                    <img src={app1} alt="..." style={{width:"100%",marginTop:"30px"}} />
                </div>
            </div>
            <div className="grid-2 application" style={{ minHeight: '400px' }}>
                <div >
                    <img src={app2} alt="..." style={{width:"100%",marginTop:"30px"}} />
                </div>
                <div>
                    <h2>Power wireless sensor for train condition monitoring  </h2>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                        facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                        minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                    lique et vitae harum natus minima!</p>
                    </div>
                </div>
            </div>
            <div className="grid-2 application">
                <div>
                    <h2>Power wireless sensors on other vibrating surface   </h2>
                    {/* <div className="grid-4">
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                    </div>
                    <div className="grid-4">
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                        <div><IconsWithName color="transparent" text="text1" /></div>
                    </div> */}
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit velit magni
                        facilis aliquid, hic, cumque porro qui eius laborum aperiam facere tempore voluptatum
                        minima dolores architecto doloribus rerum dignissimos odit veritatis. Sunt quidem simi
                    lique et vitae harum natus minima!</p>
                    </div>
                </div>

                <div >
                    <img src={app3} alt="..." style={{width:"100%",marginTop:"30px"}} />
                </div>
            </div>
        </div>
    )
}

export default Section5

import React from 'react'

const DescriptiveNavigation = ({ content = "", activeLinkNo = 1, bgcolor = "#E5E7E8", cb }) => {
    return (
        <div className="p-b" >
            <div className="page-container">
                <div className="header-menu">
                    <p id="link1" className={activeLinkNo === 1 ? "active" : ""} onClick={() => cb("link1")}>
                        <span>specification</span>
                    </p>
                    <p id="link2" className={activeLinkNo === 2 ? "active" : ""} onClick={() => cb("link2")}>
                        <span>key features</span>
                    </p>
                    <p id="link3" className={activeLinkNo === 3 ? "active" : ""} onClick={() => cb("link3")}>
                        <span>supporting docs</span>
                    </p>
                </div>
                <div className="content">
                    <p style={{ margin: '1rem 0px' }}>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DescriptiveNavigation

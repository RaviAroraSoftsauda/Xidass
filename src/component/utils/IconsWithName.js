import React, { Fragment } from 'react'

const IconsWithName = ({ className,image = "auto", text = "enter your title", width = "40%", height = '40%', color = "#d7d6d7",spanclass="title" }) => {

//console.log(image);
let icon;
if(image=="auto"){
    icon=(<div className="icon">     
        </div>);
}else{
    icon=(<div style={{display:"flex",alignItem:"center"}}>
    <img className={className ? className : ""} src={image} style={{ margin: '10px auto', width: width, height: height, backgroundColor: '#d7d6d7', borderRadius: "50%", padding: '5px' }}/>
</div>);
}
    return (
        <Fragment>
            <div className="menu-bar-2-items">
                {icon}
                <p  style={{ textAlign: 'center', fontSize: '85%' }}>
                    <span className={`${spanclass}`}>
                        {text}
                    </span></p>
            </div>
           
        </Fragment>
    )
}

export default IconsWithName

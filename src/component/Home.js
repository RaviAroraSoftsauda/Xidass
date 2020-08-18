import React from 'react'
import HomeBanner from './HomeBanner'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image1 from './../image/Exports/PNG/FaradayHomePicminmdf.png'
const Home = (props) => {

    return (
        <div>
            <HomeBanner history={props.history}/>
            <div id="section2">
            <div className="grid-2">
                <div className="img">
                    <img src={Image1} alt="..." />
                </div>
                <div className="div2sec2">
                    <h1>About Xidas <spna style={{color:"red"}}>IOT</spna></h1>
                    <p>
                        Lorem ipsum dolor sit amet
                        vel aperiam  distinctio sequi. Totam delectus repellat
                        nostrum temporibus suscipit quis ad ea laudantium culpa possimus.
                     </p>
                    <h3>Power  Solutions</h3>
                    <p>
                        Lorem, ipsum dolor  amet consectetur adip  gipisici nglorem5  iusto e
                        tionem numquam cupiditate pariatur qui
                       
                    </p>
                    <button className="button" onClick={()=>props.history.push("/power")}>Learn More</button>
                </div>
            </div>
        </div>
        
        </div>
    )
}
Home.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(Home)
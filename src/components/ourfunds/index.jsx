import './styles.css';
import Img from './funds.png';

import React from 'react'

const Funds = () => {
    return (
        <div className="ourfunds">
        
            
            <div className="funds">
            <div className="heading">
            <h1>OUR FUNDS</h1>
            </div>
                
                    <p>We achived real returns within the asset liability matching
                        process. Giving institional investors the opportunity to strategically
                        allocate funds according to their desired
                        level of exposure.
                    </p>
                    <h1>Hodisang Fund 1</h1>
                    <h5>PRIVATE EQUITE FUNDS</h5>
                    <h1>Thuso Private Markets Fund 1</h1>
                    <h5>PRIVATE EQUITE, REAL ASSETS, CREDIT FUNDS</h5>
                    <h1>Segregated Accounts / Funds </h1>
                    <h5>PRIVATE EQUITE, REAL ASSETS, CREDIT FUNDS</h5>
                    <button>LEARN MORE</button>
            </div>
            <div className="pic1">
                <img src={Img} alt="img1" />;
            </div>
            
        </div>
    )
}

export default Funds;
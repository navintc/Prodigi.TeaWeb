import React from 'react';
import './Blackbox.css';

const Blackbox =props => (


    <div className="blackbox">
        <div className="preorder">
            <h1>Pre Order Now!</h1>
            <img src={require(`./images/dvd.png`)} alt="Example" className="dvd" />
           
        </div>
    </div>

);

export default Blackbox;
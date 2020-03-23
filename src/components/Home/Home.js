import React from 'react';
import './Home.css';
import Parallax from './Parallax/Parallax';
import Blackbox from './Blackbox/Blackbox';

const home =props => (


    <div className="hometown">
        <div>
            <div>
                <Parallax />
            </div>

            <div className="big"> 
                <div className="text-body" align="center">
                    <div className="mid-text">
                        <h3>The Most Epic Text Ever Written</h3>
                        <div className="line"></div>
                        <h4>The medium length sentence that will give you goosebumps</h4>
                    </div>
                </div>

                <div className="footerclass">
                    <p>THRETA: REVELATIONS&trade; is a registered Trademark of PRODIGI INTERACTIVE&trade; : ALL RIGHTS RESERVED</p>
                    <Blackbox/>
                </div>
                
            
            </div>

        </div>
    </div>

);

export default home;
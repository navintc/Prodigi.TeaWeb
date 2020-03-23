import React, { Component } from 'react';

/*change this css file name according your css*/
import './Cubetemplate.css';


class Cubetemplate extends Component {

    render (){
        return(
            <div className="nikandiv">
                    <div className="container">
                        <div className="bigdivgal">
                            <div className="cubeboxgal">
                                <div className="boxcontentgal">
                                    <div className="innerimggal"><img src={require(`./images/${this.props.source}`)} alt="Example" className="imgplace" /></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                <div className="spacer2gal"></div>
            </div>
        )}
};

export default Cubetemplate;
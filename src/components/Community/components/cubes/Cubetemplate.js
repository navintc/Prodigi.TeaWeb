import React, { Component } from 'react';

/*change this css file name according your css*/
import './Cubetemplate.css';


class Cubetemplate extends Component {

    render (){
        return(
            <div>
                    <div className="container">
                        <div className="bigdivcommunity">
                            <div className="cubeboxcommunity">
                                <div className="boxcontentcommunity">
                                    <div className="textboxcommunity">

                                        {/* this is the topic */}
                                        <h2>{this.props.title}</h2>

                                        {/* the small description */}
                                        <p>By {this.props.name}</p>
                                    </div>
                                    <div className="innerimgcommunity"><img src={require(`./images/${this.props.source}`)} alt="Example" className="imgplacecommunity" /></div>

                                </div>
                            </div>
                        </div>
                        
                    </div>

                <div className="spacer2community"></div>
            </div>
        )}
};

export default Cubetemplate;
import React, { Component } from 'react';

/*change this css file name according your css*/
import './Cubetemplate.css';


class Cubetemplate extends Component {

    render (){
        return(
            <div>
                    <div className="container">
                        <div className="bigdivnews">
                            <div className="cubeboxnews">
                                <div className="boxcontentnews">
                                    <div className="textboxnews">

                                        {/* this is the topic */}
                                        <h2>{this.props.title}</h2>

                                        {/* the small description */}
                                        <p>{this.props.desc}</p>
                                    </div>
                                    <div className="innerimgnews"><img src={require(`./images/${this.props.source}`)} alt="Example" className="imgplace" /></div>

                                </div>
                            </div>
                        </div>
                        
                    </div>

                <div className="spacer2news"></div>
            </div>
        )}
};

export default Cubetemplate;
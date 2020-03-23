import React from 'react';
import "./Tri.css";

function Tri() {

    function tritop(e) {
        e.target.style.background = 'red';
      }

    function tritop1(e) {
        e.target.style.background = 'green';
      }
    function triright(e) {
        e.target.style.background = 'red';
      }

    function triright1(e) {
        e.target.style.background = 'green';
      }
      
    return (  
        <div>
            <div>
                <div className="d-flex justify-content-center">         
                    <img src={require(`./images/bg.png`)} className="triselecter"/>
                </div>
                <div>
                <button onMouseOver={tritop} onMouseLeave={tritop1}>
                    <img src={require(`./images/top.png`)} className="tritop"/>
                </button>
                <button onMouseOver={triright} onMouseLeave={triright1}>
                    <img src={require(`./images/right.png`)} className="triright"/>
                </button>
                <button onMouseOver={tritop} onMouseLeave={tritop1}>
                    <img src={require(`./images/top.png`)} className="tritop"/>
                </button>
                <div className="plex">
                    <p>Yolo</p>
                </div>
            </div>

            </div>
        </div>
    );

}

export default Tri;
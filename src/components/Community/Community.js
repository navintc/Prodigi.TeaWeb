import React from 'react';
import ReactDOM from 'react-dom';
import Cubetemplate from './components/cubes/Cubetemplate';
import './Community.css';


const COMMUNITY = [
  {
    img: "1.jpg", title: "Fifty shades of Threta",
    name: "Navin 'The Flash' Thamindu",
    date: "02/04/2026"
  },
  {
    img: "2.png", title: "Princess cosplay",
    name: "Suchalya Nasaraani",
    date: "05/06/2024"
  },
  {
    img: "3.jpg", title: "Threta theme live performance",
    name: "Tolmojith Bandara",
    date: "07/02/2024"
  },
  {
    img: "4.jpg", title: "3D printing threata action figures",
    name: "Udukaya Thisanka Niruwath ",
    date: "03/01/2023"
  },
  {
    img: "5.jpg", title: "Lovely Prince",
    name: "Disty Tidin Sinnakunji",
    date: "09/04/2022"
  },
  {
    img: "6.jpg", title: "Funny Threta comic",
    name: "Pasindu Badugodapitiya",
    date: "09/04/2022"
  },
];

const Community = () => (
  <div className="container">
        <div>
          <div className="joincommunity">
            <div className="rebel">
                  <p className="rebeltext">We need you – whoever you are, however much time you have – to help build a powerful movement. Our vision of change involves mass participation. Together we’re unstoppable.

                  Follow these simple steps to find the information you need to get involved with Extinction Rebellion.
                  </p>
            </div>
            
            <a href="https://www.facebook.com" target="_blank">
            <div className="joinbutton">
              <h2>Join The Rebelion!</h2>
            </div>

            </a>


          </div>
        </div>
      <div className="d-flex justify-content-center">
      
        <iframe width="97%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="spacer3"></div>
      </div>

    <div className="row mt-2 mb-2">
      <div className="col-sm-12 text-center">

        {COMMUNITY.map(({img, title, name}) => (
          <Cubetemplate source={img} title={title} name={name}/>
        ))}

      </div>
    </div>
  </div>
);

export default Community;

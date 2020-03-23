import React from 'react';
import ReactDOM from 'react-dom';
import Cubetemplate from './components/cubes/Cubetemplate';
import './Gallery.css';
import Tri from './components/Tri/Tri';


const GALLERY = [
  {
    img: "1.jpg", title: "Fifty shades of Threta",
    name: "by Navin 'The Flash' Thamindu",
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
  {
    img: "7.png", title: "Funny Threta comic",
    name: "Pasindu Badugodapitiya",
    date: "09/04/2022"
  },
];

const News = () => (
  
  <div className="gallerycontainer">

        <div className="container">
          <div className="galtextoutercover">
              <div className="galtextouter">
                  <p className="galtext">We need you – whoever you are, however much time you have – to help build a powerful movement. Our vision of change involves mass participation. Together we’re unstoppable.

                  Follow these simple steps to find the information you need to get involved with Extinction Rebellion.
                  </p>
                  </div>
            
          </div>
        </div>

    <div>
      <Tri />
    </div>


    <div className="gal">
          {GALLERY.map(({img}, {name})  => (


            <Cubetemplate source={img}/>     
            ))}
    </div>
  </div>
);

export default News;

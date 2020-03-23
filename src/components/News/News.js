import React from 'react';
import ReactDOM from 'react-dom';
import Cubetemplate from './components/cubes/Cubetemplate';
import './News.css';



const NEWS = [
  {
    img: "1.jpg", title: "Prodigi Interactive aqcuired Ubisoft",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "02/04/2026"
  },
  {
    img: "2.png", title: "Prodigi Land: the theme park, will be built in 2027",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "05/06/2024"
  },
  {
    img: "3.jpg", title: "Threta surpassed Minecraft's fan base",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "07/02/2024"
  },
  {
    img: "4.jpg", title: "CDProjectRed anounces prodigi as a Rival",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "03/01/2023"
  },
  {
    img: "5.jpg", title: "Threta ships 10million copies worldwide!",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "09/04/2022"
  },
  {
    img: "6.jpg", title: "Threta's mocap artist, Dilan Hewathudella's TEDx speech",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    date: "09/04/2022"
  },
];

const News = () => (
  <div className="container2">
    <div className="d-flex justify-content-center" >
      
      <iframe width="73%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="spacer3"></div>

    </div>
    <div className="row mt-2 mb-2">
      <div className="col-sm-12 text-center">

        {NEWS.map(({ img, title, desc }) => (
          <Cubetemplate source={img} title={title} desc={desc} />
        ))}

      </div>
    </div>
  </div>
);

export default News;

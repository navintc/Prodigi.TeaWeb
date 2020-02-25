import React from "react";
import image from "./female.jpeg";
import FlushButton from "../../components/FlushButton";
import Dustbin from "./components/Dustbin";
class Female extends React.Component{

  render() {
    return (
      <div>
        <h1>Female</h1>
        <FlushButton/>
        <Dustbin/>
        <img src={image} alt=":P"/>
      </div>
    );
  }

}

export default Female;

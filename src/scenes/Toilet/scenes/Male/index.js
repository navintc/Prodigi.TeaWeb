import React from "react";
import image from "./BGEBW.jpg"
import FlushButton from "../../components/FlushButton";

class Male extends React.Component{

  render() {
    return (
      <div>
        <h1>Male</h1>
        <FlushButton/>
        <img src={image} alt=":P"/>
      </div>
    );
  }

}

export default Male;

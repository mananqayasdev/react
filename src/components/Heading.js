import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="heading-title">{this.props.title}</h2>
        <hr className="hr-1"></hr>
      </div>
    );
  }
}

export default Heading;

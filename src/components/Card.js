import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <a href="https://www.google.com" className={this.props.class}>
        <img src={this.props.img} alt="React Logo" className="icon" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </a>
    );
  }
}

export default Card;

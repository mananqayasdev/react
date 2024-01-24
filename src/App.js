import React, { Component } from "react";
import Heading from "./components/Heading";
import "./App.css";
import Card from "./components/Card";
import phone from "./phone.svg";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Heading
          title="How can we help?
"
        />

        <div className="cards">
          <Card
            img={phone}
            title="Call us"
            class="card"
            description="Call us Reach out to us via phone for personalized support"
          />
          <Card
            title="Call us"
            img={phone}
            class="card"
            description="Call us Reach out to us via phone for personalized support"
          />
          <Card
            title="Call us"
            class="card"
            img={phone}
            description="Call us Reach out to us via phone for personalized support"
          />
          <Card
            title="Call us"
            class="card"
            img={phone}
            description="Call us Reach out to us via phone for personalized support"
          />
        </div>
      </div>
    );
  }
}

export default App;

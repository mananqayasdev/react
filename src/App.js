import React, { Component } from "react";
import Heading from "./components/Heading";
import "./App.css";
import Card from "./components/Card";
import phone from "./phone.svg";
import chat from "./chat.svg";
import community from "./community.svg";
import academy from "./academy.svg";
import Top from "./components/Top";
import moon from "./moon.svg";

class App extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <Heading
            title="How can we help? 1
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
              title="Chat with Upwork"
              img={chat}
              class="card"
              description="Get immediate support by starting a chat"
            />
            <Card
              title="Community"
              class="card"
              img={community}
              description="Connect, share and learn with Upwork Community"
            />
            <Card
              title="Academy"
              class="card"
              img={academy}
              description="Courses and tools for helping you succeed on Upwork"
            />
          </div>
        </div>
        <div className="states">
          <Top img={moon} />
        </div>
      </>
    );
  }
}

export default App;

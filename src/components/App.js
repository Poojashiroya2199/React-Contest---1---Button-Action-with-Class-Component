import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: false
    };
  }
  para() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  render() {
    return (
      <>
        <div id="main">
          {/* Do not remove this main div!! */}
          <button id="click" onClick={() => this.setState({ para: true })}>
            {this.state.para ? this.fun() : ""}
          </button>
        </div>
      </>
    );
  }
}

export default App;

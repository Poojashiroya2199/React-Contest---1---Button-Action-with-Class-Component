import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleclick() {
    return (
      <p id={para}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  render() {
    return (
      <>
        <div id="main">{/* Do not remove this main div!! */}</div>
        <button id={click} onClick={handleclick}>
          hello
        </button>
      </>
    );
  }
}

export default App;

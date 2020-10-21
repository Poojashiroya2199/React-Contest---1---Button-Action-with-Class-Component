import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="main">{/* Do not remove this main div!! */}</div>
        <button
          key={this.click}
          onClick={() => (
            <p key={this.para}>
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          )}
        >
          Hello
        </button>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../css/App.scss";
import PlaySound from "./components/playsound";
import DrawKeyboard from "./components/drawkeyboard";
import SplitLettering from"./components/splitlettering";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1><SplitLettering/></h1>
        </header>
        <main className="App-main">
          <DrawKeyboard/>
          <PlaySound/>
        </main>
        <footer className="App-footer">
            <p className="font-small-size">React Piano, keys are drawn with D3.js svg</p>
        </footer>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import "../css/App.scss";
import PlaySound from "./components/playsound";
import DrawKeyboard from "./components/drawkeyboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>React Piano</h1>
        </header>
        <main className="App-main">
          <DrawKeyboard/>
          <PlaySound/>
        </main>
        <footer className="App-footer">
            <p>React Piano, keys are drawn with D3.js svg</p>
        </footer>
      </div>
    );
  }
}

export default App;
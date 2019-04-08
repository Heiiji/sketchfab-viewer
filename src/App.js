import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={"https://static.sketchfab.com/img/press/logos/logo.png"}
            className="App-logo"
            alt="logo"
          />
          <p>
            Welcome to the <code>Tech/Frontend</code> exercise.
          </p>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main'
// import ControlledTabs from './Components/Tab'
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">

        <nav className="item-a">
          <h1 className="playerName">Ninja</h1>
          <img className="ninjaPhoto" src="https://scufgaming.com/s/wp-content/uploads/2018/10/ninja.png" />
        </nav>
        {/* <Route component={Tab} /> */}


        <Route component={Main} />
      </div>
    );
  }
}

export default App;

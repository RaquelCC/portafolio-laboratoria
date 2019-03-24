import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeMenu: 'mainPage',
    }
  }
  render() {
    return (
      <div className="App">
      {this.state.activeMenu !== 'mainPage' && <NavBar />}
       <Menu />
      </div>
    );
  }
}

export default App;

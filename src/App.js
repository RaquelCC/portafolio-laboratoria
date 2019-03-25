import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import { CSSTransition } from 'react-transition-group';
import AboutMe from './components/AboutMe'
import Tools from './components/Tools';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'mainPage',
    }

    this.handleChangeMenu = this.handleChangeMenu.bind(this);

  }

  handleChangeMenu(e) {
    this.setState({
      ...this.state,
      activeMenu: e.currentTarget.getAttribute('value'),
    })
  }

  render() {
    return (

      <div className="App">

        {/* {this.state.activeMenu !== 'mainPage' && */}
          <CSSTransition
            in={this.state.activeMenu !== 'mainPage'}
            appear={true}
            timeout={600}
            classNames="menu-fade"
            unmountOnExit
          >
            <NavBar
              activeMenu={this.state.activeMenu}
              handleChangeMenu={this.handleChangeMenu}
            />
          </CSSTransition>
        {/* } */}


        <CSSTransition
            in={this.state.activeMenu === 'mainPage'}
            appear={true}
            timeout={600}
            classNames="menu-fade"
            unmountOnExit
          >
          <Menu
            activeMenu={this.state.activeMenu}
            handleChangeMenu={this.handleChangeMenu}
          />
          </CSSTransition>

          <CSSTransition
            in={this.state.activeMenu === 'aboutMe'}
            appear={true}
            timeout={600}
            classNames="menu-fade"
            unmountOnExit
          >
          <AboutMe
          />
          </CSSTransition>
          <CSSTransition
            in={this.state.activeMenu === 'tools'}
            appear={true}
            timeout={600}
            classNames="menu-fade"
            unmountOnExit
          >
          <Tools
          />
          </CSSTransition>
      </div>

    );
  }
}

export default App;

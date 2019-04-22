import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe'
import Tools from './components/Tools';
import Snowflakes from './components/snowflakes';
import Proyects from './components/Proyects';
import ModalProyect from './components/ModalProyect';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'mainPage',
      width: window.innerWidth,
      heigth: window.innerHeight,
      modalProyect: false,
    }


    this.handleChangeMenu = this.handleChangeMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  handleChangeMenu(e) {
    this.setState({
      ...this.state,
      activeMenu: e.currentTarget.getAttribute('value'),
    })
  }

  handleKeyPress(item) {

    this.setState({
      ...this.state,
      activeMenu: item,
    })

  }

  openModal(proyect) {
    this.setState({
      ...this.state,
      modalProyect: proyect,
    })
  }

  closeModal() {
    this.setState({
      ...this.state,
      modalProyect: false,
    })
  }

  render() {
    return (

      <div className="App">
        <Snowflakes />
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
            width={this.state.width}
          />
        </CSSTransition>
        {this.state.modalProyect &&
          <ModalProyect
            closeModal={this.closeModal}
            proyect={this.state.modalProyect}
          />}
        <CSSTransition
          in={this.state.activeMenu === 'proyects'}
          appear={true}
          timeout={600}
          classNames="menu-fade"
          unmountOnExit
        >
          <Proyects
            width={this.state.width}
            openModal={this.openModal}
            proyect={this.state.proyect}
          />
        </CSSTransition>


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
            handleKeyPress={this.handleKeyPress}
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

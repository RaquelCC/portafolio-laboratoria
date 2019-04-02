import React, { Component } from 'react';
import './Menu.css'
import pixelSword from '../img/pixel-sword.png';
import pixelChest from '../img/pixel-chest.png';
import femaleKnight from '../img/female-fighter.png';
import pixelScroll from '../img/pixel-scroll.png';
import { CSSTransition } from 'react-transition-group';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeList: 'aboutMe',
            listArr: ['aboutMe', 'proyects', 'tools', 'contactMe']
        }

        this.aboutMe = React.createRef();
        this.proyects = React.createRef();
        this.tools = React.createRef();
        this.contactMe = React.createRef();

        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    componentDidMount() {
        this.aboutMe.current.focus();
    }

    handleEnterPress(e) {
        if (e.keyCode === 13) {
            this.props.handleKeyPress(this.state.activeList)
        }

        if (e.keyCode === 40) {
            const newActive = this.state.listArr[this.state.listArr.indexOf(this.state.activeList)+1] ? this.state.listArr[this.state.listArr.indexOf(this.state.activeList)+1] : 'aboutMe';
            if (newActive === 'aboutMe') {
                this.aboutMe.current.focus();
            }
            if (newActive === 'proyects') {
                this.proyects.current.focus();
            }

            if (newActive === 'tools') {
                this.tools.current.focus();
            }

            if (newActive === 'contactMe') {
                this.contactMe.current.focus();
            }

            this.setState({
                ...this.state,
                activeList: newActive,
            })
        }

        if (e.keyCode === 38) {
            const newActive = this.state.listArr[this.state.listArr.indexOf(this.state.activeList)-1] ? this.state.listArr[this.state.listArr.indexOf(this.state.activeList)-1] : 'contactMe';
            if (newActive === 'aboutMe') {
                this.aboutMe.current.focus();
            }
            if (newActive === 'proyects') {
                this.proyects.current.focus();
            }

            if (newActive === 'tools') {
                this.tools.current.focus();
            }

            if (newActive === 'contactMe') {
                this.contactMe.current.focus();
            }

            this.setState({
                ...this.state,
                activeList: newActive,
            })
        }
    }

    render() {


        return (
            <div>
                
                <CSSTransition
                    in={this.props.activeMenu === 'mainPage'}
                    appear={true}
                    timeout={1000}
                    classNames="main-fade"
                    unmountOnExit
                >
                    <div className="main-page" onKeyDown={this.handleEnterPress}>
                        <div className="menu-container">
                            <div className="name-container">
                                <span className="name">RAQUEL CANALES CONCHA</span>
                                <p className="title">FRONT-END DEVELOPER</p>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li onClick={this.props.handleChangeMenu} tabIndex="1" ref={this.aboutMe} value="aboutMe"><img src={femaleKnight} alt="pixel knight" className="menu-icon"></img><span className="menu-text">SOBRE MI</span></li>
                                    <li onClick={this.props.handleChangeMenu} tabIndex="2" ref={this.proyects} value="proyects"><img src={pixelChest} alt="pixel bag" className="menu-icon"></img><span className="menu-text">PROYECTOS</span></li>
                                    <li onClick={this.props.handleChangeMenu} tabIndex="3" ref={this.tools} value="tools"><img src={pixelSword} alt="pixel sword" className="menu-icon"></img><span className="menu-text">HERRAMIENTAS</span></li>
                                    <li onClick={this.props.handleChangeMenu} tabIndex="4" ref={this.contactMe} value="contactMe"><img src={pixelScroll} alt="pixel scroll" className="menu-icon"></img><span className="menu-text">CONTACTO</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default Menu;
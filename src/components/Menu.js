import React from 'react';
import './Menu.css'
import pixelSword from '../img/pixel-sword.png';
import pixelChest from '../img/pixel-chest.png';
import femaleKnight from '../img/female-fighter.png';
import pixelScroll from '../img/pixel-scroll.png';
import { CSSTransition } from 'react-transition-group';


function Menu(props) {
    return (
        <div>
        <CSSTransition
                in={props.activeMenu === 'mainPage'}
                appear={true}
                timeout={1000}
                classNames="main-fade"
                unmountOnExit
            >
        <div className="main-page">
            <div className="menu-container">
                <div className="name-container">
                    <span className="name">RAQUEL CANALES CONCHA</span>
                    <p className="title">FRONT-END DEVELOPER</p>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={props.handleChangeMenu} value="aboutMe"><img src={femaleKnight} alt="pixel knight" className="menu-icon"></img><span className="menu-text">SOBRE MI</span></li>
                        <li onClick={props.handleChangeMenu} value="proyects"><img src={pixelChest} alt="pixel bag" className="menu-icon"></img><span className="menu-text">PROYECTOS</span></li>
                        <li onClick={props.handleChangeMenu} value="tools"><img src={pixelSword} alt="pixel sword" className="menu-icon"></img><span className="menu-text">HERRAMIENTAS</span></li>
                        <li onClick={props.handleChangeMenu} value="contactMe"><img src={pixelScroll} alt="pixel scroll" className="menu-icon"></img><span className="menu-text">CONTACTO</span></li>
                    </ul>
                </div>

            </div>
            </div>
            </CSSTransition>
        </div>
    )
}

export default Menu;
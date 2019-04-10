import React from 'react';
import './NavBar.css';
import pixelSword from '../img/pixel-sword.png';
import pixelChest from '../img/pixel-chest.png';
import femaleKnight from '../img/female-fighter.png';
import pixelScroll from '../img/pixel-scroll.png';
import pixelConsole from '../img/pixel-console2.png';

function NavBar(props) {
    return (
        <div className="nav-bar">
            <button onClick={props.handleChangeMenu} value="mainPage" className="main-page2"><img src={pixelConsole} alt="pixel console" className="menu-icon2"></img>{props.width > 780 && <span className="menu-text">MENU</span>}</button>
            <button onClick={props.handleChangeMenu} value="aboutMe" className={props.activeMenu === "aboutMe" ? "about-me2 menu-selected" : "about-me2"}><img src={femaleKnight} alt="pixel knight" className="menu-icon2"></img>{props.width > 780 && <span className="menu-text">SOBRE MI</span>}</button>
            <button onClick={props.handleChangeMenu} value="proyects" className={props.activeMenu === "proyects" ? "proyects2 menu-selected" : "proyects2"}><img src={pixelChest} alt="pixel bag" className="menu-icon2"></img>{props.width > 780 && <span className="menu-text">PROYECTOS</span>}</button>
            <button onClick={props.handleChangeMenu} value="tools" className={props.activeMenu === "tools" ? "tools2 menu-selected" : "tools2"}><img src={pixelSword} alt="pixel sword" className="menu-icon2"></img>{props.width > 780 && <span className="menu-text">HERRAMIENTAS</span>}</button>
            <button onClick={props.handleChangeMenu} value="constactMe" className={props.activeMenu === "contactMe" ? "contact-me2 menu-selected" : "contact-me2"}><img src={pixelScroll} alt="pixel scroll" className="menu-icon2"></img>{props.width > 780 && <span className="menu-text">CONTACTO</span>}</button>
        </div>
    )
}

export default NavBar;
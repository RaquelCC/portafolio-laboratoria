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
            <button><img src={pixelConsole} alt="pixel console" className="menu-icon"></img><span className="menu-text">MENU</span></button>
            <button><img src={femaleKnight} alt="pixel knight" className="menu-icon"></img><span className="menu-text">SOBRE MI</span></button>
            <button><img src={pixelChest} alt="pixel bag" className="menu-icon"></img><span className="menu-text">PROYECTOS</span></button>
            <button><img src={pixelSword} alt="pixel sword" className="menu-icon"></img><span className="menu-text">HERRAMIENTAS</span></button>
            <button><img src={pixelScroll} alt="pixel scroll" className="menu-icon"></img><span className="menu-text">CONTACTO</span></button>
        </div>
    )
}

export default NavBar;
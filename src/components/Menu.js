import React from 'react';
import './Menu.css'
import pixelSword from '../img/pixel-sword.png';
import pixelChest from '../img/pixel-chest.png';
import femaleKnight from '../img/female-fighter.png';
import pixelScroll from '../img/pixel-scroll.png';

function Menu(props) {
    return (
        <div className="menu-container">
            <div className="name-container">
                <span className="name">RAQUEL CANALES CONCHA</span>
                <p className="title">FRONT-END DEVELOPER</p>
            </div>
            <div className="menu">
            <ul>
                <li><img src={femaleKnight} alt="pixel knight" className="menu-icon"></img><span className="menu-text">SOBRE MI</span></li>
                <li><img src={pixelChest} alt="pixel bag" className="menu-icon"></img><span className="menu-text">PROYECTOS</span></li>
                <li><img src={pixelSword} alt="pixel sword" className="menu-icon"></img><span className="menu-text">HERRAMIENTAS</span></li>
                <li><img src={pixelScroll} alt="pixel scroll" className="menu-icon"></img><span className="menu-text">CONTACTO</span></li>
            </ul>
            </div>

        </div>
    )
}

export default Menu;
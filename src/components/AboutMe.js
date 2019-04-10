import './AboutMe.css';
import React from 'react';
import pixelCat from '../img/pixel-cat.png';
// import { CSSTransition } from 'react-transition-group';

function AboutMe(props) {

    return (
        <div className="about-me-container">
            <div className="img-container">
            <img src={pixelCat} alt="gatito"></img>
            </div>
            <div className="about-me">
                Front-End Developer, egresada de la 7ma Generación de Laboratoria. Experiencia trabajando con metodologías ágiles y utilizando tecnologías como: JavaScript, CSS, React y Redux. Amante de los animales, en mi tiempo libre me dedico a jugar todo tipo de juegos: de tablero, de rol, videojuegos; y a leer libros de fantasía y ciencia ficción.
            </div>
        </div>
    )

}

export default AboutMe;
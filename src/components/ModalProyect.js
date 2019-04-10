import React from 'react';
import './ModalProyect.css';

function ModalProyect(props) {
    return (
        <div className="outer-modal" onClick={(e)=> {
            if (e.target.getAttribute("class") === "outer-modal") {
                props.closeModal();
            }
        }}>
            <div className="inner-modal">
            {props.proyect.title && <div className={`proyect-title ${props.proyect.name}`}><span>{props.proyect.title}</span></div>}
            {props.proyect.proyectLogo && <img src={props.proyect.proyectLogo} alt="proyectLogo" className="proyect-logo2"></img>}
            <img src={props.proyect.gif} alt="BQGIF" className={`proyect-gif ${props.proyect.mobile && props.proyect.mobile}`}></img>
            <div className="proyect-technologies">{props.proyect.tecnologias.join(" - ")}</div>
            <div className="proyect-description">{props.proyect.description}</div>
            <div className="proyect-buttons">
            {props.proyect.demo && <a href={props.proyect.demo} target="_blank" className={`demo-button ${props.proyect.name}`} rel="noopener noreferrer" >DEMO</a>}
            <a href={props.proyect.github} target="_blank" className={`github-button ${props.proyect.name}`} rel="noopener noreferrer" >GITHUB</a>
            </div>
            </div>
        </div>
    )
}

export default ModalProyect;
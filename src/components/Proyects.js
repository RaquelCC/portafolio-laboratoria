import React from 'react';
import './Proyects.css';
import BQ from '../img/BQGIF.gif';
import BQLogo from '../img/output-onlinepngtools.png';
import BanIgualdappGIF from '../img/BanIgualdappGIF.gif';
import mdLinks from '../img/md-links.png';

function Proyects(props) {
    return (
        <div className="proyects-general-container">
        <div className="proyect-container" onClick={()=> props.openModal({
            name: "burger-queen",
            proyectLogo: BQLogo,
            description: "Burger Queen es una aplicación que permite a una cadena de restaurants la toma de pedidos de forma rápida y eficiente, permitiendo que los garzones y la cocina esten conectados en todo momento.",
            gif: BQ,
            demo: "https://raquelcc.github.io/SCL007-BurgerQueen/",
            github: "https://github.com/RaquelCC/SCL007-BurgerQueen",
            tecnologias: ["JavaScript", "CSS", "React", "Firebase"]
        })}>
        {/* <img src={BQ} alt="BQGIF" className="proyect-gif"></img> */}
        <img src={BQLogo} alt="bqlogo" className="proyect-logo bq"></img>
        <div className="more-info-proyect bq2">MÁS INFO</div>
        </div>
        <div className="proyect-container" onClick={()=> props.openModal({
            name: "ban-igualdapp",
            title: "BanIgualdApp",
            mobile: "proyect-gif-mobile",
            description: "BanIgualdApp es una aplicación desarrollada para la fundación BanIgualdad que busca proporcionar a sus emprendedores una plataforma tecnológica que les sirva como nuevo canal de venta de sus productos y, a la vez, una plataforma de redes de contacto con otros emprendedores. Solo versión mobile.",
            gif: BanIgualdappGIF,
            demo: "https://raquelcc.github.io/SCL007-BurgerQueen/",
            github: "https://github.com/RaquelCC/SCL007-BurgerQueen",
            tecnologias: ["JavaScript", "CSS", "Materialize", "React", "Firebase"]
        })}>
        <div className="proyect-title2 ban-igualdapp"><span>BanIgualdApp</span></div>
        <div className="more-info-proyect ban-igualdapp2">MÁS INFO</div>
        </div>
        <div className="proyect-container" onClick={()=> props.openModal({
            name: "md-links2",
            title: "MD-Links",
            mobile: "proyect-gif",
            description: "MD-Links es un modulo que permite revisar los archivos .md de una ubicación ingresada por el usuario, extraer los links y reisar que esten funcionando, informando al usuario cuales estan rotos. Puede ser utilizado directo desde la terminal o importado a otro archivo JS.",
            gif: mdLinks,
            github: "https://github.com/RaquelCC/SCL007-md-links",
            tecnologias: ["JavaScript", "NodeJS"]
        })}>
        <div className="proyect-title2 md-links"><span>MDLinks</span></div>
        <div className="more-info-proyect md-links2">MÁS INFO</div>
        </div>
        </div>
    )
}

export default Proyects;
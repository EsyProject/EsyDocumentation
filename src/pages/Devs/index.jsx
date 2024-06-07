import { useState } from "react";
import { AiOutlineRight } from 'react-icons/ai';

import "./style.css";

export default function Devs() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    // configs da sidebar
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSubMenu = (item) => {
        setExpandedItem(prevItem => (prevItem === item ? null : item));
    };


    //teste de burguer
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-area">
                    <div className="logotype">
                        <p className="bosch">BOSCH</p>
                        <p className="esy">ESY</p>
                    </div>

                    <div className={`links ${isOpen ? 'open' : ''}`}>
                        <a href="#">Docs</a>
                        <a href="#">Guia do Usuário</a>
                        <a href="#">Desenvolvedores</a>
                    </div>

                    <div className="hamburger" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </div>
            </div>
            <main>
                <h1 className="our-time">Nosso time</h1>
                <p>Para que o Software Esy se tornasse uma realidade, nossa equipe se formou e trabalhou em conjunto com dedicação e empenho. 
                    Foi através desse esforço colaborativo que conseguimos transformar essa ideia em um produto tangível. Nossa união e 
                    compromisso foram fundamentais para superar desafios e concretizar esse projeto. Assim, o Esy não apenas saiu do papel, 
                    mas também ganhou vida graças ao trabalho árduo e à sinergia de todos os envolvidos. Conheça-nos melhor!</p>
            </main>

            <footer>
                <div className="logo-footer">
                    <p>BOSCH</p>
                    <p>ESY</p>
                </div>
                <div className="center">
                    <p>© Robert Bosch Ltda. 2024, todos os direitos reservados</p>
                </div>
                <div className="contact">
                    <p>Esy.bosch.br@gmail.com</p>
                </div>
            </footer>

            {/* <LocalButton text="teste aqui" onClick={handleClick} />

            <Link to="/docs">
                <button>Docs</button>
            </Link> */}
        </div>
    );
}

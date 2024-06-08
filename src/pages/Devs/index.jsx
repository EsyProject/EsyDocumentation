import { useState } from "react";
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import "./style.css";
// teste

export default function Devs() {
    const handleClick = () => {
        alert("botão deu certo família :)");
    };

    // configs da sidebar
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSubMenu = (item) => {
        setExpandedItem(prevItem => (prevItem === item ? null : item));
    };


    // configs do menu hamburguer
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // email link
    const subjectEmail = "Projeto ESY";
    const bodyEmail = "Olá, gostaria de conversar sobre o projeto de TCC Bosch Esy...";

    return (
        <div>
            <div className="navbar">
                <div className="navbar-area">
                    <div className="logotype">
                        <p className="bosch">BOSCH</p>
                        <p className="esy">ESY</p>
                    </div>

                    <div className={`app ${menuOpen ? 'overlay' : ''}`}>
                        <div className="hamburger" onClick={toggleMenu}>
                            {menuOpen ? ' ' : '☰'}
                        </div>
                        <div className={`links ${menuOpen ? 'open' : ''}`}>
                            <div className="hamburger" onClick={toggleMenu}>
                                {menuOpen ? '✕' : '☰'}
                            </div>
                            <Link to="/">Home</Link>
                            <Link to="/devs">Documentação</Link>
                            <Link to="/devs">Desenvolvedores</Link>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <h1 className="our-time">Nosso time</h1>
                <p>Para que o Software Esy se tornasse uma realidade, nossa equipe se formou e trabalhou em conjunto com dedicação e empenho.
                    Foi através desse esforço colaborativo que conseguimos transformar essa ideia em um produto tangível. Nossa união e
                    compromisso foram fundamentais para superar desafios e concretizar esse projeto. Assim, o Esy não apenas saiu do papel,
                    mas também ganhou vida graças ao trabalho árduo e à sinergia de todos os envolvidos. Conheça-nos melhor!</p>

                <div className="container-devs">
                    <div className="child">
                        <img src="/assets/images/bruno.png" />
                        <h1 className="dev-name">Bruno Gomes</h1>
                        <h2 className="dev-function">Dev Full Stack</h2>
                        <p className="dev-bio">Sempre gostei muito de tudo que envolvia criatividade e
                            desafios, foi assim que cheguei nas áreas de UX e Dev. Participar do ESY me fez
                            evoluir e aprimorar minhas capacidades, além disso, dia após dia atuando, tive
                            cada vez mais certeza que é essa a minha vocação.</p>
                        <p className="personal-links">
                            <a href="">GitHub</a>
                            <a href="">  |  Linkedin  |  </a>
                            <a href="">Email</a>
                        </p>
                    </div>
                    <div className="child">
                        <img src="/assets/images/kety.png" />
                        <h1 className="dev-name">Kethelyn Santos</h1>
                        <h2 className="dev-function">Dev Front End</h2>
                        <p className="dev-bio">Desde o começo, mesmo sem conhecer muito sobre
                            a área tech, os projetos com foco no frontend atraíram minha atenção
                            e me fizeram buscar mais conhecimento. Trabalhar com o ESY me fez
                            crescer e acreditar mais no meu potencial.</p>
                        <p className="personal-links">
                            <a href="">GitHub</a>
                            <a href="">  |  Linkedin  |  </a>
                            <a href="">Email</a>
                        </p>
                    </div>
                    <div className="child">
                        <img src="/assets/images/joao.png" />
                        <h1 className="dev-name">João Silva</h1>
                        <h2 className="dev-function">Dev Front End</h2>
                        <p className="dev-bio">O Esy foi um desafio para mim, porém, através dele,
                            aprendi, me desenvolvi e melhorei meus conhecimentos. Esy não é apenas um
                            software, é um reflexo da nossa paixão e compromisso com a inovação. Durante
                            esta jornada, apliquei e expandi meus conhecimentos técnicos e habilidades
                            sociais.</p>
                        <p className="personal-links">
                            <a href="">GitHub</a>
                            <a href="">  |  Linkedin  |  </a>
                            <a href="">Email</a>
                        </p>
                    </div>
                    <div className="child">
                        <img src="/assets/images/manu.png" />
                        <h1 className="dev-name">Manuela Souza</h1>
                        <h2 className="dev-function">UI/UX Designer e Dev Front End</h2>
                        <p className="dev-bio">Sempre gostei muito de tudo que envolvia criatividade e
                            desafios, foi assim que cheguei nas áreas de UX e Dev. Participar do ESY me fez
                            evoluir e aprimorar minhas capacidades, além disso, dia após dia atuando, tive
                            cada vez mais certeza que é essa a minha vocação.</p>

                        <p className="personal-links">
                            <a href="https://github.com/rochamanuela">GitHub</a>
                            <a href="">  |  Linkedin  |  </a>
                            <a href={`mailto:${'manuela.souza@bosch.com'}?subject=${encodeURIComponent(subjectEmail)}&body=${encodeURIComponent(bodyEmail)}`}>Email</a>
                        </p>
                    </div>
                </div>
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
                    <p>equipe.esy@gmail.com</p>
                </div>
            </footer>

            {/* <LocalButton text="teste aqui" onClick={handleClick} />

            <Link to="/docs">
                <button>Docs</button>
            </Link> */}
        </div>
    );
}

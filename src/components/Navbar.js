import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faCode, faEnvelope, faBars} from "@fortawesome/free-solid-svg-icons";
import "../App.css"

export default function Navbar() {
    return (
        <div className="wrapper">
            <div className="menu-btn"> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></div>
                <ul className="menu">
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <a href="#"></a>Accueil
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCogs} />
                        <a href="#"></a>Compétences
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCode} />
                        <a href="#"></a>Projets
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="#"></a>Contact
                    </li>
                </ul>
        </div>
    );
}

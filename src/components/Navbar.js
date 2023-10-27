import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faCode, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Navbar() {
    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-center">
                    {/*<div className="menu-btn text-white">*/}
                    {/*    <FontAwesomeIcon icon={faBars} />*/}
                    {/*</div>*/}
                    <ul className="menu flex items-center space-x-4">
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faHome} />
                            <a href="#">Accueil</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faCogs} />
                            <a href="#">Compétences</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faCode} />
                            <a href="#">Projets</a>
                        </li>
                        <li className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition-all duration-300">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import TitleGreen from "../components/Title"
import kenzo from "../img/kenzo.png"
export default function Home() {
    return (
        <div className="titlePhoto">
            <div className="title px-20">
                <TitleGreen>Hi, my name is </TitleGreen>
                <p>Kenzo</p>
                <p>Student in IT</p>
            </div>
            <img src={kenzo} alt=""/>
        </div>
    )
}
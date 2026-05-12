import React from "react"
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

function Scorll() {
    return (
        <div className="marquee">
            <marquee className="marquee">
                <ul className="Scroll">
                    <li><h1><FaPython />Python</h1></li>
                    <li><h1><FaReact />React</h1></li>
                    <li><h1><DiMysql />SQL</h1></li>
                    <li><h1><FaHtml5 />HTML5</h1></li>
                    <li><h1><FaCss3Alt />CSS</h1></li>
                    <li><h1><FaJs />Javascript</h1></li>
                </ul>
            </marquee>
        </div>
    );
}
export default Scorll
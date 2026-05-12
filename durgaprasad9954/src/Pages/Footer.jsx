import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="Footer">
            <div >
                <ul className="Footer1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <li className="Footer3">
                    <li>
                        <a href="https://www.instagram.com/pravallikachowdary_57/">
                            <h1><FaInstagram /></h1>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/Durgaprasd9954">
                            <h1><FaTwitter /></h1>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/durgaprasad-kolli-2b5310357/">
                            <h1><FaLinkedin /></h1>
                        </a>
                    </li>
                </li>
            </div>
            <div className="Footer2">
                <p>Copyright © 2026 | Powered by Durgaprasad</p>
            </div>
        </div>
    );
}
export default Footer
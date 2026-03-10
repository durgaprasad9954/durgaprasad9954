import React from "react";

function Header() {
    return (
        <div className="Parent">
            <div className="Name">
                <h1>Durgaprasad Kolli</h1>
            </div>
            <div className="Menu">
                <a href="body">Home</a>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div>
                <a href="https://web.whatsapp.com/">
                    <button className="Button">WhatsApp</button>
                </a>
            </div>
        </div>
    );
}
export default Header



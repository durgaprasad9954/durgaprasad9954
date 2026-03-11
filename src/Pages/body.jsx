import React from "react";

function Body() {
    return (
        <div className='body'>
            <div className="bodychild">
                <h1 className="name">Durgaprasad <br></br> Kolli</h1>
                <img src="\images\WhatsApp Image 2026-03-03 at 7.09.06 AM.jpeg" style={{ maxWidth: '100%', height: 'auto', width: '400px' }} />
            </div>

            <div className="About">
                <h1>Hii There...!</h1>
                <h1 className="Contactpara">I’m a Data Science Enthusiast passionate about turning data into meaningful insights <br></br>and real-world solutions. I enjoy working with data analysis, machine learning,<br></br>and visualization to solve problems and support smarter decision-making.</h1>
                <h1>(2026)</h1>

            </div>
            <hr className="line"></hr>
        </div>
    );
}
export default Body
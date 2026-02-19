import React from "react";

function Body() {
    return (
        <div className='bodyparent'>
            <div className="bodychild">
                <h1>Durgaprasad <br></br> Kolli</h1>
                <img src="\images\WhatsApp Image 2026-02-20 at 12.20.08 AM.jpeg" width="500px" />
            </div>
            <div className="About">
                <h1>Hii There...!</h1>
                <h1 className="Contactpara">I’m a Data Science Enthusiast passionate about turning data <br></br>into meaningful insights and real-world solutions. I enjoy working <br></br>with data analysis, machine learning, and visualization to solve <br></br>problems and support smarter decision-making.</h1>
                <h1>(2026)</h1>

            </div>
            <hr className="line"></hr>
        </div>
    );
}
export default Body
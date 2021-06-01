import React from "react"

function Footer() {
    return (
        <div>
            <h2>Meet the team!</h2>
            <footer id="teamFooter" className="footer">
                <div className="teamMember">
                    <div className="headshotContainer">
                        <img className="headshots" src="/assets/nikhil.jpg" alt="" />
                    </div>
                    <h3>Nikhil Massand</h3>
                    <div className="teamLinks">
                        <a href="https://www.linkedin.com/in/nikhil-massand/">
                            <img className="linkedIn" src="/assets/linkedIn.svg" alt="" />
                        </a>
                        <a href="https://github.com/nikhilmassand">
                            <img className="github" src="/assets/github.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="teamMember">
                    <img className="headshots" src="/assets/vicki.jpeg" alt="" />
                    <h3>Vicki Yang</h3>
                    <div className="teamLinks">
                        <a href="https://www.linkedin.com/in/vwyang/">
                            <img className="linkedIn" src="/assets/linkedIn.svg" alt="" />
                        </a>
                        <a href="https://github.com/vickiwyang">
                            <img className="github" src="/assets/github.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="teamMember">
                    <img className="headshots" src="/assets/david.jpg" alt="" />
                    <h3>David Behmoaras</h3>
                    <div className="teamLinks">
                        <a href="https://www.linkedin.com/in/david-behmoaras-6a688057/">
                            <img className="linkedIn" src="/assets/linkedIn.svg" alt="" />
                        </a>

                        <a href="https://github.com/dbehmoaras">
                            <img className="github" src="/assets/github.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="teamMember">
                    <h3>Joseph Lee</h3>
                    <div className="teamLinks">
                        <a href="">
                            <img className="linkedIn" src="/assets/linkedIn.svg" alt="" />
                        </a>
                        <a href="">
                            <img className="github" src="/assets/github.svg" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
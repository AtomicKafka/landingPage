import React from "react"

function Footer() {
    return (
        <div id="teamContainer">
            <h2 className="footerTitle">
                Meet the Team
            </h2>
            <div className="teamFooter">
                <div className="teamMember">
                    <div className="headshotContainer">
                        <img className="headshots" src="/assets/nikhil.jpg" alt="" />
                    </div>
                    <div className="memberName">
                        <h3 className="name">Nikhil Massand</h3>
                    </div>
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
                    <img className="headshots" src="/assets/vicki.jpg" alt="" />
                    <div className="memberName">
                        <h3 className="name">Vicki Yang</h3>
                    </div>
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
                    <div className="memberName">
                        <h3 className="name">David Behmoaras</h3>
                    </div>
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
                    <img className="headshots" src="/assets/joseph.png" alt="" />
                    <div className="memberName">
                        <h3 className="name">Joseph Lee</h3>

                    </div>
                    <div className="teamLinks">
                        <a href="https://www.linkedin.com/in/joseph-lee-a97198213/">
                            <img className="linkedIn" src="/assets/linkedIn.svg" alt="" />
                        </a>
                        <a href="">
                            <img className="github" src="/assets/github.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <footer className="closingContainer">
                <h1 className="contributions">
                    Contributions are welcome!
                </h1>
                <div className="feedback">
                    We appreciate any feedback on our package so feel free to give us some and drop
                     <a href="https://github.com/oslabs-beta/AtomicKafka/stargazers">
                        <img id="star" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/AtomicKafka?color=%2366FCF1&style=for-the-badge"/>
                    </a>
                    ! You can fork it <a className="linkLib" href="https://github.com/oslabs-beta/AtomicKafka"> here</a> and submit PRs.
                
                    <p>
                        You can also email us: atomickafkajs[at]gmail[dot]com
                    </p>
                    <p className="disclaimer">
                        MIT Licensed | Copyright @ 2021 AtomicKafka. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
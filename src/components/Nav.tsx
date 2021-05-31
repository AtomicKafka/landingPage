import React from "react"

function Nav() {
    return (
        <nav className="header_navbar">
            <div>
                <a href="https://atomickafka.org">Atomic Kafka</a>
            </div>
            <div>
                <a href="https://www.npmjs.com/package/atomic-kafka">NPM Package</a>
            </div>
            <div>
                <a href="https://github.com/oslabs-beta/AtomicKafka">Github</a>
            </div>
            <div>
                <a href="#about">About</a>
            </div>
            <div>
                <a href="#features">Features</a>
            </div>
            <div>
                <a href="#team">Team</a>
            </div>
        </nav>
    );
}

export default Nav;
import React from "react"

function Nav() {
    return (
        <div className="headerNavBar">
            <div className="headerNavBarLeft">
                <div className="headerBtn">
                    <a className="headerTag" href="https://github.com/AtomicKafka">Atomic Kafka</a>
                </div>
                <div className="headerBtn">
                    <a className="headerTag" href="https://www.npmjs.com/package/atomic-kafka">NPM Package</a>
                </div>
                <div className="headerBtn">
                    <a className="headerTag" href="https://github.com/oslabs-beta/AtomicKafka">Github</a>
                </div>
            </div>
            <div className="headerNavBarRight ">
                <div className="headerBtn">
                    <a className="headerTag" href="#about">About</a>
                </div>
                <div className="headerBtn">
                    <a className="headerTag" href="#features">Features</a>
                </div>
                <div className="headerBtn">
                    <a className="headerTag" href="#teamFooter">Team</a>
                </div>
            </div>
        </div>
    );
}

export default Nav;
import React from "react"

function Nav() {
    return (
        <div className="headerNavBar">
            <div className="headerNavBarLeft">
                <a id="homeTag" className="headerTag" href="#homeLink">AtomicKafka</a>
                <a className="headerTag" href="https://www.npmjs.com/package/atomic-kafka" target="_blank">NPM Package</a>
                <a className="headerTag" href="https://github.com/oslabs-beta/AtomicKafka" target="_blank">GitHub</a>
                <a className="headerTag" href="https://medium.com/@dbehmoaras/2eb79b20eaae?source=friends_link&sk=843b83b81eb79f37f0d2b8a96ce26212" target="_blank">Blog</a>
            </div>
            <div className="headerNavBarRight ">
                <a className="headerTag" href="#demos">Demos</a>
                <a className="headerTag" href="#featureLink">Features</a>
                <a className="headerTag" href="#teamContainer">Team</a>
            </div>
        </div>
    );
}

export default Nav;
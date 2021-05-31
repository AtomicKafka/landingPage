import React from "react";
import Install from "../components/Install";
import About from "../components/About";
import Features from "../components/Features";

function Content() {
    return (
        <div>
            <div className="container content">
              <Install />
              <About />
              <Features />
            </div>
        </div>
    );
}

export default Content;
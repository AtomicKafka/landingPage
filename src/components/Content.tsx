import React from "react";
import Install from "../components/Install";
import About from "../components/About";
import Features from "../components/Features";

function Content() {
    return (
        <div className="about-features-container">
              {/* <Install /> */}
              <About />
              <Features />
        </div>
    );
}

export default Content;
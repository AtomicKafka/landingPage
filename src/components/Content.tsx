import React from "react";
import Install from "../components/Install";
import TitleCard from "../components/TitleCard";
import Features from "../components/Features";
import About from "../components/About"
function Content() {
    return (
        <div className="about-features-container">
              {/* <Install /> */}
              <TitleCard />
              <About />
              <Features />
        </div>
    );
}

export default Content;
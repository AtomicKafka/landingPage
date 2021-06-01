import React from "react";
import Install from "../components/Install";
import TitleCard from "../components/TitleCard";
import Features from "../components/Features";
import About from "../components/About";
import Demos from "../components/Demos";

function Content() {
    return (
        <div className="about-features-container">
              {/* <Install /> */}
              <TitleCard />
              <About />
              <Demos />
              <Features />
        </div>
    );
}

export default Content;
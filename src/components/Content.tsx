import React from "react";
import Install from "./Install";
import TitleCard from "./TitleCard";
import Features from "./Features";
import About from "./About";
import Demos from "./Demos";

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
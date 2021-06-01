import React from "react";

function Features() {
  return(
    <div id="featureLink" className="features">
      
      <h3 className="featureHeading">Server-Side Library</h3>
      <div className="feature1">
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Simply import Atomic Kafka server side library and initialize an instance using the port 
            connected with the application's server. Ensure that your .env file is set up with either your Confluent 
            credentials or docker image. See an example of what that should look like HERE.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/serverside-1.svg" />
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/serverside-2.svg" />
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/serverside-3.svg" />
          </div>
        </div>
      </div>
      <h3 className="featureHeading">Client-Side Library</h3>
      <div className="feature1">
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/clientside-1.svg" />
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/clientside-2.svg" />
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs. Blah blah blah do something here, download our code, star our package, hire us for jobs.</p>
          </div>
          <div className="codeBlockContainer">
            <img className="codeBlock" src="../../assets/clientside-3.svg" />
          </div>
        </div>

    
    </div>

      {/* <div className="feature3">
        <h3>Sentences on compatibility with KSQLDB</h3>
      </div> */}
    </div>

  )
}

export default Features;
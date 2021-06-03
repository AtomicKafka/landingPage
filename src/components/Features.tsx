import React from "react";
import Gist from "react-gist";

function Features() {
  return(
    <div id="featureLink" className="features">
      <div className="featuresTitleBox">
    
        <h2 className="featuresTitle">Features</h2>
        <hr></hr>
      </div>
      <div className="featureContent">
        <h3 className="featureHeading">Server-Side Library</h3>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Ensure that your <span className="code-text">.env</span> file is set up with either your Confluent credentials or docker image. See an example of what that should look like in 
              readme <a href="https://github.com/oslabs-beta/AtomicKafka" className="linkLib">here</a>.
              Simply import AtomicKafka server side library and initialize an instance using the port 
              connected with the application's server. 
            </p>
          </div>
          <div className="codeBlockContainer">
            {/* <svg  width="100%"> */}
            {/* <svg viewBox="0 0 200 auto"> */}
            <Gist id='c526ba5708e77959566019e16a0811c3' />
            {/* <img className="codeBlock" src="../../assets/serverside-1.svg" /> */}
            {/* </svg> */}
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Create consumers using the <span className="code-text">newConsumer</span> function and pass in the group id that the consumer should be listenening on.
              By invoking <span className="code-text">socketConsume</span> with the group id, event, and topic the socket instance will emit the consumed messages for the consumer
              with the specified <span className="code-text">group_ID</span>. The app can now listen for those emitted events on the front end.
            </p>
          </div>
          <div className="codeBlockContainer">
          <Gist id='1fc9d041f2e833a47b29020744d96368' />
            {/* <img className="codeBlock" src="../../assets/serverside-2.svg" /> */}
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>Create producer using the <span className="code-text">newProducer</span> function and pass in the <span className="code-text">topic</span> that the producer will send messages to. By invoking <span className="code-text">socketProduce</span> with a topic the socket instance will listen for messages that are emitted from the frontend. The function <span className="code-text">fileProduce</span>, seen in the producer demo app, allows for a controlled send of a message from the server side based on the user's payload input.
          </p>
          </div>
          <div className="codeBlockContainer">
            <Gist id='012027cd0a6e031bb0ef035e3e1a95bb' />
            {/* <img className="codeBlock" src="../../assets/serverside-3.svg" /> */}
          </div>
        </div>
      </div>
      <div className="featureContent">
        <h3 className="featureHeading">Client-Side Library</h3>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>
            Import in the client library like so if using Typescript. Otherwise if using JavaScript (ES6+), a normal import will suffice.
          </p>
          </div>
          <div className="codeBlockContainer">
            <Gist id='f7bf238b3d0099c14486d32fe0c6a05a' />
            {/* <img className="codeBlock" src="../../assets/clientside-1.svg" /> */}
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>
              Use a custom callback to update state within the consumer component. AtomicKafka's <span className="code-text">useInterval</span>
              and <span className="code-text">consumer</span> functions will help control the pace of consumption from the cluster.
            </p>
          </div>
          <div className="codeBlockContainer">
            <Gist id='6cc76e21822321fb8f74d2e1f5baa469' />
            {/* <img className="codeBlock" src="../../assets/clientside-2.svg" /> */}
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>
            When creating a component that produces, instantiate the client class with the appropriate uri that the socket will emit to.
            Define a <span className="code-text">payload</span> for the message that will be sent to the cluster and pass that into the client <span className="code-text">producer</span> function along 
            with the socket event that the payload will be sent to.
          </p>
          </div>
          <div className="codeBlockContainer">
            <Gist id='c233f9cc7c822ab4af04d25c5a76c8d0' />
            {/* <img className="codeBlock" src="../../assets/clientside-3.svg" /> */}
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
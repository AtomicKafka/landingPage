import React from "react";
import Gist from "react-gist";

function Features() {
  return(
    <div id="featureLink" className="features">
      
      <div className="featureContent">
        <h3 className="featureHeading">Server-Side Library</h3>
        <div className="explainPlusBlock">
          <div className="codeExplain">
            <p>Ensure that your .env file is set up with either your Confluent 
              credentials or docker image. See an example of what that should look like in 
              readme <a href="https://github.com/oslabs-beta/AtomicKafka" className="linkLib">here</a>. 
              Simply import Atomic Kafka server side library and initialize an instance using the port 
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
            <p>Create consumers using the newConsumer function and pass in the group id that the consumer should be listenening on.
              By invoking socketConsume with the group id, event, and topic the socket instance will emit the consumed messages for the consumer
              with the specified group id. The app can now listen for those emitted events on the front end.
            </p>
          </div>
          <div className="codeBlockContainer">
          <Gist id='1fc9d041f2e833a47b29020744d96368' />
            {/* <img className="codeBlock" src="../../assets/serverside-2.svg" /> */}
          </div>
        </div>
        <div className="explainPlusBlock">
          <div className="codeExplain">
          <p>Create consumers using the newProducer function and pass in the topic that the producer will send messages to.
              By invoking globalProduce with a topic the socket instance will listen for messages that are emitted from the frontend.
              The function fileProduce, seen in the producer demo app, allows for a controlled send of a message from the server side based on the user's payload input.
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
            Import in the client library like so if using Typescript otherwise a normal import suffices if using Javascript (ES6+).
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
              Instantiate the client class within a consumer component passing in the uri that the socket should listen on. By defining
              a callback that takes a payload and changes state however necessary within the function body. Finally, by invoking useInterval and 
              consumer, with the socket event and callback as parameters to consumer the app will now be listening to incoming messages that are emitted
              from the server side.
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
            When creating a producer component instantiate the client class with the appropriate uri that the socket will emit to.
            Define a payload for the message that will be sent to the cluster and pass that into the client producer function along 
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
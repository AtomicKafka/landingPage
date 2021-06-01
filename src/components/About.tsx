import React from "react";

function About() {
  return(
    <div id="aboutLink" className="aboutContainer">
      <div className="aboutSection">
        <h2>React Integration</h2>
        <p>
          Atomic Kafka provides developers with client and server libraries that support KafkaJS
          React applications. Use our npm package to seamlessly connect stateful React components and a Kafka 
          message broker.
        </p>
      </div>

      <div className="aboutSection">
        <h2>Integration with KSQLDB</h2>
        <p>
          Connect your Atomic Kafka Consumers or Producers with your KSQLDB stream.
        </p>
      </div>

      <div className="aboutSection">
        <h2>Lightweight</h2>
        <p>
          I don't know what to say with this one! I don't know what to say with this one!
           I don't know what to say with this one! I don't know what to say with this one!
        </p>
      </div>
    </div>
  )
}

export default About;
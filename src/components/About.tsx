import React from "react";

function About() {
  return(
    <div id="aboutLink" className="aboutContainer">
      <div className="aboutSection">
        <h2>React Integration</h2>
        <p>
          AtomicKafka provides developers with client and server libraries that support KafkaJS
          React applications. Use our npm package to seamlessly connect stateful React components and a Kafka 
          message broker.
        </p>
      </div>

      <div className="aboutSection">
        <h2>Encapsulation</h2>
        <p>
          Connect your Atomic Kafka Consumers or Producers with your KSQLDB stream.
        </p>
      </div>

      <div className="aboutSection">
        <h2>Lightweight</h2>
        <p>
          Our package helps you keep your package lightweight and efficient through the use of websockets
          over restful architectures.
        </p>
      </div>
    </div>
  )
}

export default About;
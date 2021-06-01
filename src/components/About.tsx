import React from "react";

function About() {
  return(
    <div id="aboutLink" className="aboutContainer">
      <div className="aboutSection">
        <h2>Easy Setup</h2>
        <p>
          Easily setup your Atomic Kafka consumers and producers with client and server side libraries to assist
          with your connection with a Kafka cluster.
        </p>
      </div>
      <div className="aboutSection">
        <h2>Lightweight</h2>
        <p>
          I don't know what to say with this one! I don't know what to say with this one!
           I don't know what to say with this one! I don't know what to say with this one!
        </p>
      </div>
      <div className="aboutSection">
        <h2>Integration with Kafka Connect and KSQLDB</h2>
        <p>
          Connect your Atomic Kafka Consumers with your KSQLDB stream and collect data from the cluster that way!
        </p>
      </div>
    </div>
  )
}

export default About;
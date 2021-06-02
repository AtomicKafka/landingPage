import React from "react";

function Demos() {
  return(
    <div id="demos" className="demosContainer">
      <div className="demosBox">
        <h3 className="featureHeading">Producer Demo</h3>
        <div className="demoText">
          The producer app demonstrates how purchase orders are sent as messages to a specified Kafka cluster based off of user inputs
          The representation below shows messages created off of user inputs but this app can also send messages in a constant stream from
          a different input source.
        </div>
        <div className="producerGif">
          <img src="/assets/producer.gif" alt="" />
        </div>
        <a href="https://github.com/AtomicKafka/atomicKafkaProducer">
          <button className="get-code-btn">Get the Code</button>
        </a>
      </div>

      <div className="demosBox">
        <h3 className="featureHeading">Consumer Demo</h3>
        <div className="demoText">
          The messages sent from the producer app can be seen in the New Sales section of the application. This component
          is consuming messages using the socket provided in the Atomic Kafka library and rendering state based off of incoming
          messages.  
        </div>
        <div className="consumerGif">
          <img src="/assets/consumer.gif" alt="" />
        </div>
        <a href="https://github.com/AtomicKafka/atomicKafkaConsumer">
          <button className="get-code-btn">Get the Code</button>
        </a>
      </div>

    </div>
  )
}

export default Demos;
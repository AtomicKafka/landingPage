import React from "react";

function Demos() {
  return(
    <div id="demos" className="demosContainer">
      <div className="demosBox">
        <h3 className="featureHeading">Producer Demo</h3>
        <div className="demoText">Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing</div>
        <div className="producerGif">
          <img src="/assets/producer.gif" alt="" />
        </div>
        <a href="https://github.com/AtomicKafka/atomicKafkaProducer">
          <button className="get-code-btn">Get the Code</button>
        </a>
      </div>

      <div className="demosBox">
        <h3 className="featureHeading">Consumer Demo</h3>
        <div className="demoText">Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing Some explanation of what you're seeing</div>
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
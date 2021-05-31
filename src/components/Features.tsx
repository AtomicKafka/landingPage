import React from "react";

function Features() {
  return(
    <div className="features">
      <div className="feature1">
        <h3>Sentences on Client side library</h3>
        <pre>
          <code>
            declare function require(name: string)
            const AtomicKafkaClient = require('atomic-kafka/client').default
          </code>
        </pre>
        <pre>
        {`function Consumer_Component () {
    const akc = new AtomicKafkaClient(URI_STRING);

    const callback = (payload) => {
      //user-defined function definition
    }
    akc.useInterval(() => akc.consumer(<event_string>, callback), <interval_delay>)
    }`}
        </pre>
        <pre>
        {`function Producer_Component () {

    const akc = new AtomicKafkaClient(URI_STRING);

    const payload = {
      //arbitrarily nested key value pairs
    };

    akc.producer(<event_string>, payload);
    }`}
        </pre>
      </div>
      <div className="feature2">
        <h3>Sentences on Server side library</h3>

      </div>
      <div className="feature3">
        <h3>Sentences on compatibility with KSQLDB</h3>
      </div>
    </div>
    
  )
}

export default Features;
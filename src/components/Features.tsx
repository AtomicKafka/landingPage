import React from "react";


/**
 * Features & compatibility
 *  supports docker and confluent
 *  supports ksqlDB
 *
 *
 * Code blocks
 *  1. Server
 *  2. Producer
 *  3. Producer
 *
 * People: (not in current component)
 */

function Features() {
  return(
    <div id="featureLink" className="features">
      <div className="feature1">
        <h3>Sentences on Server side library</h3>
        <pre>
{`//initialize and configure expressApp according to user specifications

const AtomicKafkaServer = require('atomic-kafka/server')

const server = expressApp.listen(process.env.PORT, () => {
  console.log(\`Listening on port \${process.env.PORT}\`);
}
const aks = new AtomicKafkaServer(server);`}
        </pre>
        <pre>
          <code>
            atomicKafkaInstance.newConsumer('group_ID_string'); <br/>
            atomicKafkaInstance.socketConsume('group_ID_string', 'event_string', 'topic_string');
          </code>
        </pre>
        <pre>
          <code>
            atomicKafkaInstance.newProducer('topic_string'); <br/>
            atomicKafkaInstance.globalProduce('postMessage', 'test_topic')
          </code>
        </pre>
      </div>

      <div className="feature2">
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

      <div className="feature3">
        <h3>Sentences on compatibility with KSQLDB</h3>
      </div>
    </div>

  )
}

export default Features;
import React from "react";

function TitleCard() {
  return(
    <div className="titleCard">
      {/* <img src="assets/logo-vert.png" width="600" alt="" /> */}
      <img id="logo" src="assets/logo.svg" height="200" width="600" alt="" />
      <h3>An npm package for JavaScript developers that facilitates connections between React applications and Kafka cluster through the use of WebSockets
      </h3>
      <a href="https://github.com/oslabs-beta/AtomicKafka">
        <button id="install-btn">
        Install
        </button>
      </a>
    </div>
  )
}

export default TitleCard;
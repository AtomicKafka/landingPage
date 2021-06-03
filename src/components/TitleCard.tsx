import React from "react";

function TitleCard() {
  return(
    <div className="titleCard">
      {/* <img src="assets/logo-vert.png" width="600" alt="" /> */}
      <img id="logo" src="assets/newlogo.svg" height="200" width="600" alt="" />
      <h3 id="titleDescript">A lightweight npm package developed to simplify the process of establishing bi-directional, real-time data streaming with Apache Kafka in your web app</h3>
      <a href="https://github.com/oslabs-beta/AtomicKafka" target="_blank">
        <button id="install-btn">
        Install
        </button>
      </a>
    </div>
  )
}

export default TitleCard;
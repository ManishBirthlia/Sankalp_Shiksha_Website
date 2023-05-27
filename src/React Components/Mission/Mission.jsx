import React from "react";
import "./style.css";

export default () => {
  return (
    <div className="Mission_m">
      <section className="Mission_section" id="primary">
        <div id="mission"></div>
        <div id="content">
          <h1 class="hover-underline-animation">OUR MISSION</h1>
          <p id="pri"></p>
        </div>
      </section>
      <section className="Mission_section" id="secandory">
        <div id="vision"></div>
        <div id="content">
          <h1 class="hover-underline-animation">OUR VISION</h1>
          <p id="sec"></p>
        </div>
      </section>
    </div>
  );
};

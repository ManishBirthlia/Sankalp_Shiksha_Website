import React from "react";
import "./style.css";

function Support() {
  return (
    <div>
      <div class="supp">
        <h1> Our Supporters</h1>
        <div class="logos">
          <div class="logos-slide">
            <a>
              <img src="./logos/webd.jpg" alt="" />
            </a>
            <a href="https://www.tredence.com/" target="_blank">
              <img src="./logos/Tredence_logo.webp" alt="" />
            </a>
            <a>
              <img src="./logos/Logo-NCF-1.png" alt="" />
            </a>
            <a>
              <img src="./logos/forbes.svg" alt="" />
            </a>
            <a href="https://www.sankalpshiksha.com">
              {" "}
              <img src="./logos/SANKALP-SHIKSHA-ICON.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;

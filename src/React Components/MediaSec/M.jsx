import React from "react";
import s from "./styles.module.css";
import "./styles.module.css";

function Media() {
  return (
    <div className={s.wrapper}>
      <div class={s.container}>
        <h1>Social Media</h1>

        <div class={s.mediaSection}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vw7FG1bDQ8M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div class={s.videoContainer}>
            <video id="video2" controls>
              <source src="assets/video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div class={s.gallery}>
          <figure class={`${s.card} ${s.card1}`}>
            <img src="assets/Screenshot (160).png" alt="" />
            <figcaption>image1</figcaption>
          </figure>

          <figure class={s.card}>
            <img src="assets/image6.jpeg" alt="" />
            <figcaption>image2</figcaption>
          </figure>

          <figure class={s.card}>
            <img src="assets/Screenshot (162) (1).png" alt="" />
            <figcaption>image3</figcaption>
          </figure>
          <figure class={s.card}>
            <img src="assets/Screenshot (161) (1).png" alt="" />
            <figcaption>image4</figcaption>
          </figure>
          <figure class={s.card}>
            <img src="assets/image3.jpeg" alt="" />
            <figcaption>image5</figcaption>
          </figure>
          <figure class={s.card}>
            <img src="assets/image1.png" alt="" />
            <figcaption>image6</figcaption>
          </figure>
          <figure class={s.card}>
            <img src="assets/image2.jpeg" alt="" />
            <figcaption>image7</figcaption>
          </figure>
        </div>

        <div class={s.newspaper}>
          <div
            id="carouselExampleIndicators"
            class={`${"carousel"} ${"slide"} ${s.mcs}`}
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class={s.container}>
                  <div class={s.row}>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/Better-india.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/download-4.png"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/Better-india.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/download-3.png"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class={s.container}>
                  <div class={s.row}>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/Better-india.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/Better-india.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/Better-india.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div class={s.col}>
                      <img
                        class={s.columns}
                        src="https://muskaandreams.org/wp-content/uploads/2020/11/download-4.png"
                        alt="Second slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;

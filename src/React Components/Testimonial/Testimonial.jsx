import React, { useEffect } from "react";
import "./Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className="testsec">
      <h1 data-aos="zoom-in">Testimonials</h1>
      <div className="testimonial">
        <figure data-aos="fade-up" class="snip1390">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
            alt="profile-sample3"
            class="profile"
          />
          <figcaption>
            <h2>Eleanor Crisp</h2>
            <h4>UX Design</h4>
            <blockquote>
              Dad buried in landslide! Jubilant throngs fill streets! Stunned
              father inconsolable - demands recount!
            </blockquote>
          </figcaption>
        </figure>
        <figure data-aos="fade-up" class="snip1390">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            alt="profile-sample5"
            class="profile"
          />
          <figcaption>
            <h2>Gordon Norman</h2>
            <h4>Accountant</h4>
            <blockquote>
              Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I
              think my cerebellum has just fused.{" "}
            </blockquote>
          </figcaption>
        </figure>
        <figure data-aos="fade-up" class="snip1390">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
            alt="profile-sample6"
            class="profile"
          />
          <figcaption>
            <h2>Sue Shei</h2>
            <h4>Public Relations</h4>
            <blockquote>
              The strength to change what I can, the inability to accept what I
              can't and the incapacity to tell the difference.
            </blockquote>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Testimonial;

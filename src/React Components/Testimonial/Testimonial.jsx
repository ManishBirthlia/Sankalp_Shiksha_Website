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
            <h2>Parvi Gupta</h2>
            <h4>NITH, Ex BA In Amazon </h4>
            <blockquote>
              I have been working with Sannkalp Shiksha even before they were
              registered as an NGO. I am proud to be a part of an organisation
              that is making a difference in the lives of children and their
              families. The NGO expanded under the guidance of the founders,
              NIT-H alumni, and through CSR from Tredence. I believe that the
              future of Sannkalp Shiksha is bright as they continue to focus on
              their goal of providing education to the underprivileged children.
              This vision will not only change the lives of the unprivileged
              children but will also fight child labour rooted deep in our
              society due to poverty and unemployment.
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
            <h2>Pravin Mitkar</h2>
            <h4>Social entrepreneur</h4>
            <blockquote>
              Sankalp Shiksha is an amazing organisation that is transforming
              the rural education scenario in India. They are providing
              underprivileged children with access to quality education and
              mentoring them to become confident and responsible citizens.
              Sankalp Shiksha is a ray of hope for many children and a catalyst
              for change.
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

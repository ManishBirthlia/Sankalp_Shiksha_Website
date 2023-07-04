import React, { useEffect } from "react";
import "./Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import praveen from "./praveen.jpg";
import parvi from "./parvi.jpg";
import himanshu from "./Himanshu.jpg";
import rupesh from "./rupesh.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};
function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div className="testsec">
      <h2 data-aos="zoom-in">Testimonials</h2>
      <Carousel responsive={responsive} swipeable={true}>
        <figure data-aos="fade-up" className="snip1390">
          <img src={praveen} alt="profile-sample5" className="profile" />
          <figcaption>
            <h2>Pravin Mitkar</h2>
            <h4>Social Entrepreneur</h4>
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
        <figure data-aos="fade-up" className="snip1390">
          <img src={rupesh} alt="profile-sample6" className="profile" />
          <figcaption>
            <h2>Rupesh Sawant</h2>
            <h4>SDE at LTI</h4>
            <blockquote>
              When I heard about the amazing work that Sankalp Foundation is
              doing in rural areas, I was inspired to help. They are providing
              children with the opportunity to get better education and a chance
              of a brighter future. It was an honor for me to be able to
              contribute to such a noble cause. Sankalp Foundation is definitely
              one of the best NGOs out there!
            </blockquote>
          </figcaption>
        </figure>
        <figure data-aos="fade-up" className="snip1390">
          <img src={parvi} alt="profile-sample3" className="profile" />
          <figcaption>
            <h2>Parvi Gupta</h2>
            <h4>NITH, Ex BA In Amazon </h4>
            <blockquote>
              I have been working with Sannkalp Shiksha even before they were
              registered as an NGO. I am proud to be a part of an organisation
              that is making a difference in the lives of children and their
              families. Sankalp Shiksha vision will not only change the lives of
              the unprivileged children but will also fight child labour rooted
              deep in our society due to poverty and unemployment.
            </blockquote>
          </figcaption>
        </figure>
        <figure data-aos="fade-up" className="snip1390">
          <img src={himanshu} alt="profile-sample6" className="profile" />
          <figcaption>
            <h2>Himanshu Kr. Barnawal</h2>
            <h4>CEO (Ads Bee Pvt. Ltd0)</h4>
            <blockquote>
              Sankalp NGO is an incredible organization dedicated to social
              change. Their holistic approach to education, healthcare, and
              sustainable development has transformed countless lives. Their
              commitment, compassion, and professionalism are truly inspiring. I
              wholeheartedly support Sankalp's mission and encourage others to
              join them in creating a better, more equitable world.
            </blockquote>
          </figcaption>
        </figure>
      </Carousel>
    </div>
  );
}

export default Testimonial;

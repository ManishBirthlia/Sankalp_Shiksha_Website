import React from "react";
import "./Founder.css";
import { Container } from "react-bootstrap";

function Founder() {
  return (
    <Container>
    <div className="Founder">
      <h1>Founder's Story</h1>
      <div className="Fdisplay">
        <div className="Fimg">
          <img alt="" src="./Main_pics/1.jpg" className="img-responsive" />
        </div>
        <div className="FText">
          <h2>Vikas Kumar</h2>
          <h3>Founder</h3>
          <p>
            Mr. Vikas Kumar, graduate of NIT Hamirpur pursuing electrical and
            communication engineering was inspired by the covid emergency to
            selflessly provide services to the people in need. He, along with
            some of his peers from his village distributed food-items, masks,
            soap and medicine while also creating awareness among the villagers.
            This initiative has now grown into Sankalp Shiksha which is working
            towards upliftment and betterment of society as a whole. Mr Kumar's
            efforts have been an inspiration for many others who are striving
            hard during this difficult time to help those in need without
            expecting anything in return.
          </p>
        </div>
      </div>
    </div>
    </Container>
    // <>
    // <div className="Founder">
    // <h2>Our Founder's Story</h2>
    //   <figure className="snip1579">
    //     <img
    //       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg"
    //       alt="profile-sample2"
    //     />
    //     <figcaption>
    //       <h3>Mr. Vikas Kumar</h3>
    //       <h5>Founder</h5>
    //       <blockquote>
    //         <p>
    //           Mr. Vikas Kumar, graduate of NIT Hamirpur pursuing electrical and
    //           communication engineering was inspired by the covid emergency to
    //           selflessly provide services to the people in need. He, along with
    //           some of his peers from his village distributed food-items, masks,
    //           soap and medicine while also creating awareness among the
    //           villagers. This initiative has now grown into Sankalp Shiksha
    //           which is working towards upliftment and betterment of society as a
    //           whole. Mr Kumar's efforts have been an inspiration for many others
    //           who are striving hard during this difficult time to help those in
    //           need without expecting anything in return.
    //         </p>
    //       </blockquote>
    //     </figcaption>
    //     <a href="#"></a>
    //   </figure>
    // </div>
    // <hr/>
    // </>
  );
}
export default Founder;

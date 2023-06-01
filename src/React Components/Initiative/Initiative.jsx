import React, { useEffect } from "react";
import Styles from "./Initiative.module.css";
import { BiLibrary } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Initiative() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
      <div className={Styles.Services} id="services">
        <h2 data-aos="zoom-in">Initiative</h2>
        <div className={Styles.row}>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <BiLibrary />
                </i>
              </div>
              <h3>Free sankalp library</h3>
              <p>
                We have opened the library in hafua balram village,
                kushinagar.It was inaugurated on 21st february.We have a huge
                collections of books collected from friends, families and many
                supported. Books can be read by people from all ages , almost
                200+ students are enrolled in the library and they can issue the
                book for one week and may reissue it on another week. It created
                learning enviornment among childrens , people and it will bring
                every young mind together for a bright future.
              </p>
            </div>
          </div>
          <div class={Styles.column} data-aos="zoom-in">
            <div class={Styles.card}>
              <div class={Styles.iconwrap}>
                <i>
                  <FaSchool />
                </i>
              </div>
              <h3>Sankalp pathshala</h3>
              <p>
                The main objective of this pathshala is to promote rural
                education and bring children who have been deprived of knowledge
                due to financial conditions. Student pursuing graduation and
                locals invest their 1.5 hour to the pathshala in the evening, we
                also do counselling of parents who don’t send their children to
                school. We also conduct various technical fest and
                extra-curricular activities it focuses on overall development of
                a child.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Initiative;

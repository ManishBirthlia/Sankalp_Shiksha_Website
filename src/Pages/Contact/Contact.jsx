import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);
  return (
    <div id="contact" className={styles.top1}>
    <div className={styles.background}></div>
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.form}>
          <div className={styles.contactinfo}>
            <h3 className={styles.title}>Let's get in touch</h3>
            <p className={styles.text}>Sankalp Shiksha</p>

            <div className={styles.info}>
              <div className={styles.information}>
                <FaEnvelope className={styles.iconre} />
                <p><a href="mailto:contact@sankalpshiksha.com" style={{textDecoration:"none",color:"white"}}>contact@sankalpshiksha.com</a></p>
              </div>
              <div className={styles.information}>
                <FaPhone className={styles.iconre} />
                <p>+91 9554991042</p>
              </div>
            </div>

            <div className={styles.socialmedia}>
              <p>Connect with Us</p>
              <div className={styles.socialicons}>
                <a rel="noreferrer" href="https://m.facebook.com/medextrous/">
                  <FaFacebook />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/medextrous/"
                >
                  <FaInstagram />
                </a>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/sankalpshiksha/"
                >
                  <FaLinkedin />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2xRMHVwMB8vuJBrjmylCPg"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contactform}>
            <div className={`${styles.circle} ${styles.one}`}></div>
            <div className={`${styles.circle} ${styles.two}`}></div>

            <form action="#" autoComplete="off">
              <h3 className={styles.title}>Contact Us</h3>
              <div className={styles.inputcontainer}>
                <input
                  type="text"
                  name="name"
                  style={{borderRadius:"10px 10px 0 0"}}
                  placeholder="Name"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputcontainer}>
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="Contact no."
                  className={styles.input}
                />
              </div>
              <div className={`${styles.inputcontainer} ${styles.textarea}`}>
                <textarea
                  name="message"
                  placeholder="message"
                  className={styles.input}
                ></textarea>
              </div>
              <input type="submit" value="Send" className={styles.btn} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

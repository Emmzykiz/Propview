import classes from "../css/Footer.module.css";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className={classes.footer}>
          <div className={classes["footer-section-1"]}>
            <h3 className={classes["footer-content-header"]}>Navigation</h3>
            <a className={classes["footer-content"]} href="index.html">
              Home
            </a>
            <a className={classes["footer-content"]} href="index.html">
              Search
            </a>
            <a className={classes["footer-content"]} href="index.html">
              Properties
            </a>
            <a className={classes["footer-content"]} href="index.html">
              Stories
            </a>
            <a className={classes["footer-content"]} href="index.html">
              SignIn / SignUp
            </a>
          </div>

          <div className={classes["footer-section-2"]}>
            <h3 className={classes["footer-content-header"]}>Contact Us</h3>
            <a href="index.html" className={classes["footer-content"]}>
              Phone: +234 (0) xxx-xxx-xxxx
            </a>
            <a href="index.html" className={classes["footer-content"]}>
              Email: ......
            </a>
            <a href="index.html" className={classes["footer-content"]}>
              Address: 1234 Example St,
            </a>
            <a href="index.html" className={classes["footer-content"]}>
              City, State, Country
            </a>
          </div>

          <div className={classes["footer-section-3"]}>
            <h3 className={classes["footer-content-header"]}>Legal</h3>
            <a href="index.html" className={classes["footer-content"]}>
              Terms of Use
            </a>
            <a href="index.html" className={classes["footer-content"]}>
              Privacy Policy
            </a>
            <a href="index.html" className={classes["footer-content"]}>
              Disclaimer
            </a>

            <div className={classes["social-media"]}>
              <h3 className={classes["footer-content-header-special"]}>
                Connect With Us
              </h3>
              <div className={classes["social-media-icons"]}>
                <a
                  href="index.html"
                  className={classes["social-media-icon-link"]}
                >
                  <img
                    className={classes["social-media-icon"]}
                    src={instagram}
                    alt="instagram"
                  ></img>
                </a>

                <a
                  href="index.html"
                  className={classes["social-media-icon-link"]}
                >
                  <img
                    className={classes["social-media-icon"]}
                    src={linkedin}
                    alt="linkedin"
                  ></img>
                </a>

                <a
                  href="index.html"
                  className={classes["social-media-icon-link"]}
                >
                  <img
                    className={classes["social-media-icon"]}
                    src={facebook}
                    alt="facebook"
                  ></img>
                </a>

                <a
                  href="index.html"
                  className={classes["social-media-icon-link"]}
                >
                  <img
                    className={classes["social-media-icon"]}
                    src={twitter}
                    alt="twitter"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={classes.copyright}>
        <p>Copyright 2021 PropView. All rights reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;

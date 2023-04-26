import { Fragment } from "react";
import classes from "../css/Navigation.module.css";
import img1 from "../assets/icons/home-img.png";
import Logo from "./Logo";

const Nav = (props) => {
  return (
    <Fragment>
      <nav className={classes.nav}>
        <Logo />
        <ul className={classes.lists}>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">Search</a>
          </li>
          <li>
            <a href="index.html">Properties</a>
          </li>
          <li>
            <a href="index.html">Stories</a>
          </li>
          <li>
            <a href="index.html" className={classes["special-nav-link"]}>
              Sign-in / Sign-up
            </a>
          </li>
        </ul>
      </nav>
      <div className={classes.imgbox}>
        <img src={img1} alt="" className={classes.img}></img>
      </div>
    </Fragment>
  );
};

export default Nav;

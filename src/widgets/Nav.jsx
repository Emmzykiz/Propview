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
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home#search">Search</a>
          </li>
          <li>
            <a href="properties">Properties</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="profile" className={classes["special-nav-link"]}>
              Profile
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className={classes.imgbox}>
        <img src={img1} alt="" className={classes.img}></img>
      </div> */}
    </Fragment>
  );
};

export default Nav;

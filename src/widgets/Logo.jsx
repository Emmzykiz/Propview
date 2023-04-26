import classes from "../css/LogoDisplay.module.css";
import logo from "../assets/icons/logo.png";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="" className={classes["logo-img"]}></img>
    </div>
  );
};

export default Logo;

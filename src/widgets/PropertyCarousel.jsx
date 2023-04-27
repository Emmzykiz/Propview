import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "../css/PropertyDetailCarousel.module.css";
import img3 from "../assets/icons/property-detail-1.png";
import img4 from "../assets/icons/property-detail-2.png";
import img5 from "../assets/icons/property-detail-3.png";
import img6 from "../assets/icons/property-detail-4.png";

const PropertyDetailCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div className={classes.card}>
          <img
            src={img3}
            className={classes["image-spec"]}
            alt="property-detail-one"
          ></img>
        </div>
        <div className={classes.card}>
          <img src={img4} alt="property-detail-two"></img>
        </div>
        <div className={classes.card}>
          <img src={img5} alt="property-detail-three"></img>
        </div>
        <div className={classes.card}>
          <img src={img6} alt="property-detail-four"></img>
        </div>
      </Carousel>
    </div>
  );
};

export default PropertyDetailCarousel;

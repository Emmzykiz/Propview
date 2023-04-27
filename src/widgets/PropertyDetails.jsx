import { Fragment } from "react";
import classes from "../css/PropertyDetails.module.css";
import PropertyDetailCarousel from "./PropertyCarousel";

const PropertyDetails = () => {
  return (
    <Fragment>
      <div className={classes["property-details"]}>
        <h2>Property Details</h2>
        <div className={classes.line}></div>
        <p>
          Nestled in the heart of a serene neighborhood, this stunning landed
          property boasts a rich history and timeless charm. Originally built in
          the early 1900s, this property has been lovingly restored and updated
          over the years to seamlessly blend classic elegance with modern
          convenience. As you approach the property, you'll be greeted by a
          meticulously manicured lawn and vibrant flower beds, creating a warm
          and inviting atmosphere. The spacious front porch is the perfect spot
          to enjoy a cup of coffee or entertain guests. Inside, you'll find an
          impressive interior that exudes character and sophistication. From the
          high ceilings and hardwood floors to the intricate moldings and
          stunning light fixtures, every detail has been carefully crafted to
          create a truly special living space. The property features multiple
          bedrooms, each with its own unique character and charm, as well as
          beautifully appointed bathrooms and living spaces. A gourmet kitchen
          with top-of-the-line appliances and a cozy dining area complete the
          interior. Out back, you'll find a beautifully landscaped yard with
          plenty of room for outdoor entertaining or relaxation. Whether you're
          enjoying a barbecue with friends and family or simply soaking up the
          sun, this property is the perfect retreat from the hustle and bustle
          of everyday life. Don't miss your chance to own a piece of history and
          experience the timeless elegance of this stunning landed property.
        </p>
        <PropertyDetailCarousel />
      </div>
    </Fragment>
  );
};

export default PropertyDetails;

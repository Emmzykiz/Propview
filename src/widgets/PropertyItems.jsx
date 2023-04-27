import { Fragment } from "react";
import classes from "../css/PropertyItems.module.css";

const PropertyItems = () => {
  return (
    <Fragment>
      <div className={classes["grid-items"]}>
        <div className={classes["grid-item"]}>
          <p>PRICE</p>
          <h2>Price Upon Request</h2>
        </div>

        <div className={classes["grid-item"]}>
          <p>BEDROOMS</p>
          <h2>20</h2>
        </div>

        <div className={classes["grid-item"]}>
          <p>BATHROOMS</p>
          <h2>25 Full</h2>
        </div>

        <div className={classes["grid-item"]}>
          <p>INTERIOR</p>
          <h2>26,909 Sq Ft.</h2>
        </div>

        <div className={classes["grid-item"]}>
          <p>EXTERIOR</p>
          <h2>4.94 Acre (s)</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default PropertyItems;

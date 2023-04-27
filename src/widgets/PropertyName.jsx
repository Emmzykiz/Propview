import { Fragment } from "react";
import PropertyItems from "./PropertyItems";
import classes from "../css/PropertyName.module.css";
import PropertyDetails from "./PropertyDetails";

const PropertyName = () => {
  return (
    <Fragment>
      <div className={classes["property-name"]}>
        <p>PROPERTY NAME</p>
        <div className={classes["property-name-header"]}>
          <h2>Terrazzo Duplex by Adron Homes</h2>
        </div>
      </div>
      <PropertyItems />
      <PropertyDetails />
    </Fragment>
  );
};

export default PropertyName;

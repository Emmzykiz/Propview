import { Fragment } from "react";
import classes from "../../css/ViewPurchaseButtons.module.css";

const ViewPurchaseButtons = () => {
  return (
    <Fragment>
      <div className={classes["section-one-buttons"]}>
        <div className={classes["view-tour"]}>
          <button>
            <a href="\" className={classes["view-tour-links"]}>
              View Location
            </a>
          </button>
          <button>
            <a href="\" className={classes["view-tour-links"]}>
              Take Virtual Tour
            </a>
          </button>
        </div>
        <div className={classes.purchase}>
          <button>
            <a href="\" className={classes["view-tour-link"]}>
              Purchase
            </a>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewPurchaseButtons;

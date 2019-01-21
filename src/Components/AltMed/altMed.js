import React from "react";

import classes from "./altMed.css";
import Names from "./names/names";

const altMed = props => {
  return (
    <div className={classes.AltMed}>
      <Names type="acupuncture" />
      <Names type="bioEnergy" />
      <Names type="chiropractor" />
      <Names type="hijama" />
    </div>
  );
};

export default altMed;

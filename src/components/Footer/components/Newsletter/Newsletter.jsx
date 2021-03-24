import TextField from "@material-ui/core/TextField";
import React from "react";
import classes from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div>
      <h1 className={classes.title}>Newsletter</h1>
      <p className={classes.info}>Stay update with our latest</p>

      <form noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          style={{ background: "white" }}
        />
      </form>
    </div>
  );
}

export default Newsletter;

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SignupSection from "sections/signupSection/SignupSection";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

export default function Signup() {
  const classes: object = useStyles();

  return <SignupSection />;
}

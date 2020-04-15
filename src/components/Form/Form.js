import React from "react";
import "./Form.scss";
import classNames from "classnames";

const Form = ({ children, className }) => {
  return <div className={classNames("form", className)}> {children}</div>;
};

export default Form;

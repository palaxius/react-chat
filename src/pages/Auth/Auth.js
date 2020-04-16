import React from "react";
import { Route } from "react-router";
import LoginForm from "../../modules/LoginForm/containers/LoginForm";
import RegisterForm from "../../modules/RefisterForm/containers/RegisterForm";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </div>
    </section>
  );
};

export default Auth;

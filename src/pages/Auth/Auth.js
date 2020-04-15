import React from "react";
import LoginForm from "../../modules/LoginForm/components/LoginForm";
import { Route } from "react-router";
import RegisterForm from "../../modules/RefisterForm/components/RegisterForm";

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

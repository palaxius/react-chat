import React from "react";
import "./styles/index.scss";
import "./pages/Auth/Auth.scss";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="wrapper">
      {isAuth ? <Redirect to="/im" /> : <Redirect to="/login" />}
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path={"/im"} component={Home} />
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);

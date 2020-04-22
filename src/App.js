import React from "react";
import "./styles/index.scss";
import "./pages/Auth/Auth.scss";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { Route } from "react-router";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/register"]} component={Auth} />
      <Route exact path={"/im"} component={Home} />
    </div>
  );
}

export default App;

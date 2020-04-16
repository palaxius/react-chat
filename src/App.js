import React from "react";
import "./styles/index.scss";
import "./pages/Auth/Auth.scss";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { Route } from "react-router";

function App() {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login"]} component={Auth} />
      <Route path={"/im"} component={Home} />
      <Auth />
    </div>
  );
}

export default App;

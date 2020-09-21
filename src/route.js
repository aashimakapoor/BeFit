import React from "react";
import {
  Router, Route, Switch,
} from "react-router-dom";
import history from "./history";
import "./App.css";
import HomeView from "./pages/homeView/homeView";
import BFHeader from "./components/common/BFHeader/BFHeader";

const routing = (
  <>
    <BFHeader history={history} />
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomeView} />
        </Switch>
    </Router>
    {/* <FBBackToTopButton /> */}
  </>
);

export default routing;

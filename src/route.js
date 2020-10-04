import React from "react";
import {
  Router, Route, Switch,
} from "react-router-dom";
import history from "./history";
import "./App.css";
//components
import HomeView from "./pages/homeView/homeView";
import BFHeader from "./components/common/BFHeader/BFHeader";
import BFFooter from "./components/common/BFFooter/BFFooter";

const routing = (
  <>
    <BFHeader history={history} />
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomeView} />
        </Switch>
    </Router>
    <BFFooter />
    {/* <FBBackToTopButton /> */}
  </>
);

export default routing;

import React, { Suspense, ReactElement } from "react";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

export const Routes = (): ReactElement => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Suspense>
  </Router>
);

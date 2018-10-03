import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/profile" component={Profiles} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </Router>
);

export default App;

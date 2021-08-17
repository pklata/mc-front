import React from "react";
import { Route, Switch } from "react-router";
import AddBuilding from "./components/AddBuilding";
import BuildingsPage from "./components/BuildingsPage";

const App = () => (
  <div className="container-fluid">
    <Switch>
      <Route path="/" exact component={BuildingsPage} />
      <Route path="/building" component={AddBuilding} />
    </Switch>
  </div>
);

export default App;

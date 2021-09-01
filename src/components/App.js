import { Route, Switch } from "react-router-dom";
import ManageBuilding from "./buildings/ManageBuilding";
import BuildingsPage from "./buildings/BuildingsPage";
import PageNotFound from "./PageNotFound";
import DeleteBuilding from "./buildings/DeleteBuilding";
import BuildingOptions from "./buildings/BuildingOptions";

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/" exact component={BuildingsPage} />
      <Route path="/building/:id/options" component={BuildingOptions} />
      <Route path="/building/:id/delete" component={DeleteBuilding} />
      <Route path="/building/:id" component={ManageBuilding} />
      <Route path="/building" component={ManageBuilding} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;

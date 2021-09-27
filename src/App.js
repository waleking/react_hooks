import StateTutorial from "./componets/StateTutorial";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/","/useState"]}>
          <StateTutorial />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import StateTutorial from "./componets/StateTutorial";
import ReducerTutorial from "./componets/ReducerTutorial";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/useState"]}>
          <StateTutorial />
        </Route>

        <Route exact path="/useReducer">
          <ReducerTutorial />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

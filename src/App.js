import StateTutorial from "./componets/StateTutorial";
import { ReducerTutorial0, ReducerTutorial1 } from "./componets/ReducerTutorial";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const links = [
    {
      text: "useState",
      hyperlink: "/useState",
    },
    {
      text: "useReducer",
      hyperlink: "/useReducer",
    },
  ];

  const Navbar = () =>
    links.map((link) => (
      <span>
        <Link to={link.hyperlink}>{link.text}</Link>
        {"    "}
      </span>
    ));

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/useState"]}>
          <StateTutorial />
        </Route>

        <Route exact path="/useReducer">
          <div>Not using reducer</div>
          <ReducerTutorial0 />
          <div>Using reducer</div>
          <ReducerTutorial1 />
        </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

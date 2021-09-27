import StateTutorial from "./componets/StateTutorial";
import ReducerTutorial from "./componets/ReducerTutorial";
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
  const Links = () =>
    links.map((link) => <Link to={link.hyperlink}>{link.text}</Link>);

  return (
    <BrowserRouter>
      {/* The comment part is similar as Links*/}
      {/* {links.map((link) => ( */}
      {/*   <Link to={link.hyperlink}>{link.text}</Link> */}
      {/* ))} */}
      <Links />
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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectIdea from "./componentes/ProjectIdea";
import Rasael from "./componentes/Rasael";
import SearchRsael from './componentes/SearchRsael';
import MainPagee from "./componentes/MainPagee";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <MainPagee/>
        </Route>
        <Route exact path='/projectIdea'>
          <ProjectIdea />
        </Route>
        <Route exact path='/Rasael'>
          <Rasael></Rasael>
        </Route>
        <Route exact path='/table'>
          <SearchRsael></SearchRsael>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

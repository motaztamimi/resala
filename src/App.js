import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectIdea from "./componentes/ProjectIdea";
import Rasael from "./componentes/Rasael";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <h1 className='projectTitle'>العنوان</h1>
            <div className='selectSection'>
              <Link to='/projectIdea'> فكرة المشروع</Link>
              <Link to='/Rasael'>الرسائل </Link>
            </div>
          </div>
        </Route>
        <Route exact path='/projectIdea'>
          <ProjectIdea />
        </Route>
        <Route exact path='/Rasael'>
          <Rasael></Rasael>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

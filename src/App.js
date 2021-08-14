import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectIdea from "./componentes/ProjectIdea";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <h1 className='projectTitle'>رسائل فتح القدير كاملة
</h1>
            <div className='selectSection'>
              <Link to='/projectIdea'> فكرة المشروع</Link>
              <Link to='/Book'>الرسائل </Link>
            </div>
          </div>
        </Route>
        <Route exact path='/projectIdea'>
          <ProjectIdea />
        </Route>
        <Route exact path='/Book'></Route>
      </Switch>
    </Router>
  );
}

export default App;

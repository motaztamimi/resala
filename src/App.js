import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectIdea from "./componentes/ProjectIdea";
import Rasael from "./componentes/Rasael";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <h1 className='projectTitle'>
              تحقيق كتاب فتح القدير للكمال بن الهمام
            </h1>
            <h1 className='projectTitle'>
              على الهداية شرح بداية المبتدي لبرهان الدين المرغيناني
            </h1>
            <div className='selectSection'>
              <Link to='/projectIdea'> فكرة المشروع</Link>
              <Link to='/Rasael'>تفصح وتحميل الرسائل </Link>
              <Link to='/Rasael'>كشف بأسماء الرسايل</Link>
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

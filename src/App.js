import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Intro from './pages/Intro';


function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Intro />
      </Route>
      <Route path='/dss' exact>
        <Main />
      </Route>
    </Switch>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';


function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
      </Switch>
  );
}

export default App;

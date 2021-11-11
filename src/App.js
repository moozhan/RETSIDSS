import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Areas from './pages/Areas';
import TypeofCharger from './pages/TypeofCharger';
import Priorities from './pages/Priorities';
import Test from './pages/Test';
import Location from './pages/Location';


function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/areas'>
          <Areas />
        </Route>
        <Route path='/typeofCharger'>
          <TypeofCharger />
        </Route>
        <Route path='/priorities'>
          <Priorities />
        </Route>
        <Route path='/test'>
          <Test />
        </Route>
        <Route path='/location'>
          <Location />
        </Route>
      </Switch>
  );
}

export default App;

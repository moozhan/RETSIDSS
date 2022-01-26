import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Areas from './pages/Areas';
import TypeofInfrastructure from './pages/TypeofInfrastructure';
import Priorities from './pages/Priorities';
import Test from './pages/Test';
import Location from './pages/Location';
import TempLocation from './pages/TempLocation';
import Configure from './pages/Configure';


function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/areas'>
          <Areas />
        </Route>
        <Route path='/TypeofInfrastructure'>
          <TypeofInfrastructure />
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
        <Route path='/templocation'>
          <TempLocation />
        </Route>
        <Route path='/configure'>
          <Configure />
        </Route>
      </Switch>
  );
}

export default App;

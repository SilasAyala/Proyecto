import './App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Materials from './materials/pages/Materials.js';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation.js';
import Reciclaje from './materials/pages/Reciclaje';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path ="/" exact>
            <Materials />
          </Route>

          <Route path="/:materialId/Reciclaje" exact>
            <Reciclaje />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

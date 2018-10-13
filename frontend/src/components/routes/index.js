import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from '../welcomePage';
import ERGPage from '../ergPage';
import UserHome from '../userHome';
import ResourcesPage from '../resourcesPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/home' component={UserHome}/>
      <Route path='/erg' component={ERGPage}/>
      <Route path='/resources' component={ResourcesPage}/>
    </Switch>
  </div>
)

export default Routes;

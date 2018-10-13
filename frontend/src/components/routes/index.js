import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ERGPage from '../ergPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/erg' component={ERGPage}/>
    </Switch>
  </div>
)

export default Routes;

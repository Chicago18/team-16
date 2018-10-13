import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
    </Switch>
  </div>
)

export default Routes;

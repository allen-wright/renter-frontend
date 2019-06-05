import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import LeaseTerms from '../components/pages/LeaseTerms';
import MaintenanceRequests from '../components/pages/MaintenanceRequests';
import Messages from '../components/pages/Messages';
import Profile from '../components/pages/Profile';
import Signup from '../components/auth/Signup';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/terms' component={LeaseTerms} />
    <Route exact path='/messages' component={Messages} />
    <Route exact path='/requests' component={MaintenanceRequests} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/signup' component={Signup} />
  </Switch>
);

export default Routes;

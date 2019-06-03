import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import LeaseTerms from '../components/pages/LeaseTerms';
import MaintenanceRequests from '../components/pages/MaintenanceRequests';
import Messages from '../components/pages/Messages';
import Profile from '../components/pages/Profile';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/terms' component={LeaseTerms} />
    <Route path='/messages' component={Messages} />
    <Route path='/requests' component={MaintenanceRequests} />
    <Route path='/profile' component={Profile} />
  </Switch>
);

export default Routes;

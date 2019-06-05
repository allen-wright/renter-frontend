import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/pages/Home';
import Dashboard from '../components/pages/Dashboard';
import LeaseTerms from '../components/pages/LeaseTerms';
import MaintenanceRequests from '../components/pages/MaintenanceRequests';
import Messages from '../components/pages/Messages';
import Profile from '../components/pages/Profile';
import Signup from '../components/auth/Signup';

const Routes = ({ user }) => (
  <Switch>
    <Route exact path='/' render={() => (user.currentUser.email ? (<Redirect to="/dashboard"/>) : (<Home />))}/> />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/terms' component={LeaseTerms} />
    <Route exact path='/messages' component={Messages} />
    <Route exact path='/requests' component={MaintenanceRequests} />
    <Route exact path='/profile' component={Profile} />
    {/* <Route exact path='/signup' component={Signup} /> */}
    <Route exact path="/signup" render={() => (user.currentUser.email ? (<Redirect to="/dashboard"/>) : (<Signup />))}/>
  </Switch>
);

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Routes);

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
    <Route exact path='/' render={() => (user.currentUser.email ? (<Redirect to="/dashboard"/>) : (<Home />) )}/> />
    <Route exact path='/dashboard' render={() => (user.currentUser.email ? (<Dashboard />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/terms' render={() => (user.currentUser.email ? (<LeaseTerms />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/messages' render={() => (user.currentUser.email ? (<Messages />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/requests' render={() => (user.currentUser.email ? (<MaintenanceRequests />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/profile' render={() => (user.currentUser.email ? (<Profile />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path="/signup" render={() => (user.currentUser.email ? (<Redirect to="/dashboard"/>) : (<Signup />) )}/>
  </Switch>
);

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Routes);

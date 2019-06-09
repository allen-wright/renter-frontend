import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/pages/Home';
import LeaseTerms from '../components/pages/LeaseTerms';
import MaintenanceRequests from '../components/pages/MaintenanceRequests';
import Messages from '../components/pages/Messages/Messages';
import Profile from '../components/pages/Profile';
import Signup from '../components/auth/Signup';

const Routes = ({ auth }) => (
  <Switch>
    <Route exact path='/terms' render={() => (auth.currentUser.email ? (<LeaseTerms />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/messages' render={() => (auth.currentUser.email ? (<Messages />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/requests' render={() => (auth.currentUser.email ? (<MaintenanceRequests />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path='/profile' render={() => (auth.currentUser.email ? (<Profile />) : (<Redirect to="/signup"/>) )}/> />
    <Route exact path="/signup" render={() => (auth.currentUser.email ? (<Redirect to="/profile"/>) : (<Signup />) )}/>
    <Route path='/' render={() => (auth.currentUser.email ? (<Redirect to="/profile"/>) : (<Home />) )}/> />
  </Switch>
);

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Routes);

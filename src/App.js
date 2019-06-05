import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Routes from './config/routes';
import setAuthHeader from './utils/setAuthHeader';
import { setCurrentUser } from './actions/userActions';
import store from './configureStore';
import './App.css';

// checks to see if there's a JWT in the local storage
// if so, sets authorization header to the JWT token
// also sets the redux store to the decoded JWT token's user info
if (localStorage.jwtToken) {
  let jwtToken = localStorage.jwtToken;
  setAuthHeader(jwtToken);
  const decodedToken = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decodedToken));
}

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default withRouter(App);

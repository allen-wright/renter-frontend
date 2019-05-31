import React from 'react';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(App);

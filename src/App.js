import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Routes from './config/routes';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default withRouter(App);

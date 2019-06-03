import React from 'react';
import { connect } from 'react-redux';

const Home = ({ auth }) => {
  return(
    <main className="home">
      <h1>Home</h1>
      <h2>Welcome, {auth.name}</h2>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Home);
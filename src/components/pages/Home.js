import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user }) => {

  return(
    <main className="home">
      <h1>Home</h1>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Home);
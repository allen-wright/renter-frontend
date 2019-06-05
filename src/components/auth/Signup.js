import React from 'react';
import { connect } from 'react-redux';

const Signup = () => {
  return(
    <main className="home">
      <h1>Signup</h1>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Signup);
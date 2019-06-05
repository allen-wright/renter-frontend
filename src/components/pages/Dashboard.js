import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ user }) => {
  return(
    <main className="dashboard">
      <h1>Dashboard</h1>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Dashboard);
import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ auth }) => {
  return(
    <main className="profile">
      <p>Profile</p>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Profile);
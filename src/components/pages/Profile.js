import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, deleteUser } from '../../actions/profileActions';

const Profile = ({ profile, getProfile, deleteUser }) => {

  const { userProfile } = profile;

  useEffect(() => {
    getProfile();
  }, []);

  return(
    <main className="profile">
      { userProfile ?
        <p>Profile</p>
      :
        <p>Loading</p>
      }
    </main>
  )
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, { getProfile, deleteUser })(Profile);
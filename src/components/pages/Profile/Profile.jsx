import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, deleteUser } from 'actions/profileActions';

const Profile = ({ profile, getProfile, deleteUser }) => {

  const { userProfile } = profile;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser();
  }

  return(
    <main className="profile">
      { userProfile ?
        <>
          <p>Profile</p>
          <p>{userProfile.name}</p>
          <p>{userProfile.email}</p>
          <button onClick={handleDelete}>Delete Account</button>
        </>
      :
        <p>Loading profile...</p>
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
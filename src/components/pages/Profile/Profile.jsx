import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, deleteUser } from 'actions/profileActions';

const Profile = ({ profile, getProfile, deleteUser }) => {

  const { userProfile } = profile;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  // TODO: either delete this or make it a bit more secure for demo purposes
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   deleteUser();
  // }

  return(
    <main className="profile">
      { userProfile ?
        <>
          <p>Profile</p>
          <p>{userProfile.name}</p>
          <p>{userProfile.email}</p>
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
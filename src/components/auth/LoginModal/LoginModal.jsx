import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'actions/authActions';
import './LoginModal.css';

function LoginModal({ auth }) {

  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;
  const { currentUser } = auth;

  useEffect(() => {
    let modal = document.querySelector('#login-modal');
    if (modal) modal.style.opacity = 1;
    }
  ,[])

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(userData);
  }

  return(
    <>
      <form id="login-modal" onSubmit={handleSubmit}>
        <h1>RENTER</h1>
        <p>Please log in.</p>
        <div className="header-signup-input">
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div className="header-signup-input">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
        </div>
        <input value="LOGIN" type="submit" id="header-signup-submit" />
        <a href="/resetpassword" id="reset">I forgot my password.</a>
      </form>
    </>
  )
}

const mapStateToProps = function(state){
  return { auth: state.auth };
};

export default connect(mapStateToProps, { loginUser })(LoginModal);
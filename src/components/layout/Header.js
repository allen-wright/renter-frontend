import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/authActions';

const Header = ({ auth, loginUser, logoutUser }) => {
  // const [ error, setError ] = useState(null);
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;
  const { currentUser } = auth;

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

  const handleLogout = e => {
    e.preventDefault();
    logoutUser();
  }

  return(
    <header>
      <div className="logo">
        <h1>Renter</h1>
      </div>
        { currentUser.email ?
        <nav>
          <Link to='/profile'>Welcome, { currentUser.name.split(' ')[0] }</Link>
          <Link to='/requests'>Maintenance Requests</Link>
          <Link to='/messages'>Messages</Link>
          <Link to='/terms'>Lease Terms</Link>
          <a href="/" onClick={handleLogout}>Logout</a>
        </nav>
        :
        <nav>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
            <input value="Submit" type="submit" />
          </form>
          <Link to='/signup'>Sign Up</Link>
        </nav>
        }
    </header>
  )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser, logoutUser } )(Header);
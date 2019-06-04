import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginFetch } from '../../actions/userActions';

const Header = ({ user, userLoginFetch }) => {
  const [ error, setError ] = useState(null);
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    userLoginFetch(userData);
  }

  const { email, password } = userData;

  return(
    <header>
      <div className="logo">
        <h1>Renter</h1>
      </div>
        { user.isLoggedIn ?
        <nav>
          {/* <Link to='/profile'>Welcome, { user.name.split(' ')[0] }</Link> */}
          <Link to='/requests'>Maintenance Requests</Link>
          <Link to='/messages'>Messages</Link>
          <Link to='/terms'>Lease Terms</Link>
          <Link to='/logout'>Logout</Link>
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
    user: state.user
});

export default connect(mapStateToProps, { userLoginFetch } )(Header);
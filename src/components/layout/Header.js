import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ user }) => {
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
    console.log(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('test');
  }

  const { email, password } = userData;

  return(
    <header>
      <div className="logo">
        <h1>Renter</h1>
      </div>
        { user.isLoggedIn ?
        <nav>
          <Link to='/profile'>Welcome, { user.name.split(' ')[0] }</Link>
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

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Header);
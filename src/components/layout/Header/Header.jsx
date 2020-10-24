import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/authActions';
import './Header.css';

function Header({ auth, logoutUser, setModalActive }) {
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;
  const { currentUser } = auth;

  const handleLogout = e => {
    e.preventDefault();
    logoutUser();
  }

  return(
    <header className="bottom-border">
      <nav>
        <h1><Link to='/' id='logo'>RENTER</Link></h1>
        { currentUser.email ?
          <ul>
            <li><Link to='/profile'>Welcome, { currentUser.name.split(' ')[0] }</Link></li>
            <li><Link to='/payments'>Payments</Link></li>
            <li><Link to='/requests'>Maintenance Requests</Link></li>
            <li><Link to='/messages'>Messages</Link></li>
            <li><Link to='/terms'>Lease Terms</Link></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        :
          <ul id="login-container">
            <button id="header-login-button" onClick={setModalActive}>LOGIN</button>
            <Link to='/signup' className={'header-signup-button'}>SIGN UP</Link>
          </ul>
        }
      </nav>
    </header>
  )
}

const mapStateToProps = function(state){
  return { auth: state.auth };
};

export default connect(mapStateToProps, { logoutUser })(Header);
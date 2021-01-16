import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'actions/authActions';
import './Header.css';

function Header({ auth, logoutUser, setModalActive }) {

  const { currentUser } = auth;

  const handleLogout = e => {
    e.preventDefault();
    logoutUser();
  }

  return(
    <header>
      <nav>
        <h1><Link to='/' id='logo'>RENTER</Link></h1>
        { currentUser.email ?
          <ul>
            <li><Link to='/profile' className={'header-link'}>WELCOME, { currentUser.name.split(' ')[0].toUpperCase() }</Link></li>
            <li><Link to='/payments' className={'header-link'}>PAYMENTS</Link></li>
            <li><Link to='/requests' className={'header-link'}>MAINTENANCE REQUESTS</Link></li>
            <li><Link to='/messages' className={'header-link'}>MESSAGES</Link></li>
            <li><Link to='/terms' className={'header-link'}>LEASE TERMS</Link></li>
            <li><a href="/" className={'header-link'} onClick={handleLogout}>LOGOUT</a></li>
          </ul>
        :
          <ul id="login-container">
            <li><button id="header-login-button" onClick={setModalActive}>LOGIN</button></li>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  return(
    <header>
      <div className="logo">
        <h1>Renter</h1>
      </div>
        { auth.name ?
        <nav>
          <Link to='/profile'>Welcome, { auth.name.split(' ')[0] }</Link>
          <Link to='/requests'>Maintenance Requests</Link>
          <Link to='/messages'>Messages</Link>
          <Link to='/terms'>Lease Terms</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
        :
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </nav>
        }
    </header>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Header);
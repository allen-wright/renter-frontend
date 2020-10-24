import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from 'actions/authActions';
import './Header.css';

function Header({ auth, loginUser, logoutUser }) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = userData;
  const {currentUser} = auth;

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
    <header className="bottom-border">
      <nav>
        <h1><Link to='/' id='logo'>RENTER</Link></h1>
        { currentUser.email ?
          <ul>
            <li><Link to='/profile' className={'hvr-underline-from-center'}>Welcome, { currentUser.name.split(' ')[0] }</Link></li>
            <li><Link to='/payments' className={'hvr-underline-from-center'}>Payments</Link></li>
            <li><Link to='/requests' className={'hvr-underline-from-center'}>Maintenance Requests</Link></li>
            <li><Link to='/messages' className={'hvr-underline-from-center'}>Messages</Link></li>
            <li><Link to='/terms' className={'hvr-underline-from-center'}>Lease Terms</Link></li>
            <li><a href="/" className={'hvr-underline-from-center'} onClick={handleLogout}>Logout</a></li>
          </ul>
        :
          <ul className={'signup-container'}>
            <li>
              {/* <form id={'header-signup'} onSubmit={handleSubmit}>
                <div className={'header-signup-input'}>
                  <label htmlFor="email">EMAIL: </label>
                  <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div className={'header-signup-input'}>
                  <label htmlFor="password">PASSWORD: </label>
                  <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                <input value="Login" type="submit" className={'header-signup-submit'} />
              </form> */}
            </li>
            <li>
              <Link to='/login' className={'header-login-button'}>LOGIN</Link>
              <Link to='/signup' className={'header-signup-button'}>SIGN UP</Link>
            </li>
          </ul>
        }
      </nav>
    </header>
  )
}

const mapStateToProps = function(state){
  return { auth: state.auth };
};

export default connect(mapStateToProps, {loginUser, logoutUser})(Header);
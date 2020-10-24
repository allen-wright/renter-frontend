import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from 'actions/authActions';
import './Header.css';

function Header({ auth, loginUser, logoutUser }) {
  const [ userData, setUserData ] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;
  const { currentUser } = auth;

  const handleLoginClick = () => {
    document.querySelector("main").classList.add("modal-active");
    document.querySelector("footer").classList.add("modal-active");
    let modal = document.querySelector("#login-modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
  }

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
            <li><Link to='/profile'>Welcome, { currentUser.name.split(' ')[0] }</Link></li>
            <li><Link to='/payments'>Payments</Link></li>
            <li><Link to='/requests'>Maintenance Requests</Link></li>
            <li><Link to='/messages'>Messages</Link></li>
            <li><Link to='/terms'>Lease Terms</Link></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        :
          <ul id="login-container">
            <button id="header-login-button" onClick={handleLoginClick}>LOGIN</button>
            <form id="login-modal" onSubmit={handleSubmit}>
              <div className={'header-signup-input'}>
                <label htmlFor="email">EMAIL: </label>
                <input type="email" name="email" value={email} onChange={handleChange} />
              </div>
              <div className={'header-signup-input'}>
                <label htmlFor="password">PASSWORD: </label>
                <input type="password" name="password" value={password} onChange={handleChange} />
              </div>
              <input value="LOGIN" type="submit" id="header-signup-submit" />
            </form>
            {/* <Link to='/login' className={'header-login-button'}>LOGIN</Link> */}
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

export default connect(mapStateToProps, { loginUser, logoutUser })(Header);
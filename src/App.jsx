import React from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import LoginModal from 'components/auth/LoginModal';
import Routes from 'config/routes';
import setAuthHeader from 'utils/setAuthHeader';
import { setCurrentUser } from 'actions/authActions';
import store from 'configureStore';
import './App.css';

// checks to see if there's a JWT in the local storage
// if so, sets authorization header to the JWT token
// also sets the redux store to the decoded JWT token's user info
if (localStorage.jwtToken) {
  let jwtToken = localStorage.jwtToken;
  setAuthHeader(jwtToken);
  const decodedToken = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decodedToken));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    }
    this.setModalActive = this.setModalActive.bind(this);
    this.setModalInactive = this.setModalInactive.bind(this);
  }

  setModalActive(e) {
    e.stopPropagation();
    console.log('active');
    this.setState({
      modalActive: true
    })
    document.querySelector("header").classList.add("modal-active");
    document.querySelector("main").classList.add("modal-active");
    document.querySelector("footer").classList.add("modal-active");
    let modal = document.querySelector("#login-modal");
    if (modal) modal.style.visibility = "visible";
    if (modal) modal.style.opacity = "1";
  }

  setModalInactive() {
    console.log('inactive');
    this.setState({
      modalActive: false
    })
    document.querySelector("header").classList.remove("modal-active");
    document.querySelector("main").classList.remove("modal-active");
    document.querySelector("footer").classList.remove("modal-active");
    let modal = document.querySelector("#login-modal");
    if (modal) modal.style.visibility = "hidden";
    if (modal) modal.style.opacity = "0";
  }

  render(){
    return (
      <>
        <div onClick={this.setModalInactive}>
          <Header setModalActive={this.setModalActive} />
          <Routes />
          <Footer />
        </div>
        {this.state.modalActive ? <LoginModal /> : null}
      </>
    );
  }
}

export default withRouter(App);

import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import LoginModal from 'components/auth/LoginModal';
import Routes from 'config/routes';
import { setCurrentUser } from 'actions/authActions';
import store from 'configureStore';
import './App.css';

// checks to see if there's a JWT in the local storage
// if so, sets authorization header to the JWT token
// also sets the redux store to the decoded JWT token's user info
if (localStorage.user) {
  let name = localStorage.name;
  let email = localStorage.email;
  store.dispatch(setCurrentUser({name, email}));
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
    document.querySelector("header").classList.add("modal-active");
    document.querySelector("main").classList.add("modal-active");
    document.querySelector("footer").classList.add("modal-active");
    e.stopPropagation();
    this.setState({
      modalActive: true
    })
  }

  setModalInactive() {
    if (this.state.modalActive) {
      document.querySelector("header").classList.remove("modal-active");
      document.querySelector("main").classList.remove("modal-active");
      document.querySelector("footer").classList.remove("modal-active");
      let modal = document.querySelector('#login-modal');
      if (modal) modal.style.opacity = 1;
      this.setState({
        modalActive: false
      })
    }
  }

  render(){
    return (
      <>
        <div id="body-container" onClick={this.setModalInactive}>
          <Header setModalActive={this.setModalActive} setModalInactive={this.setModelInactive} />
          <Routes />
          <Footer />
        </div>
        {this.state.modalActive ? <LoginModal setModalInactive={this.setModalInactive} /> : null}
      </>
    );
  }
}

export default withRouter(App);

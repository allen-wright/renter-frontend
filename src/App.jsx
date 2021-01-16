import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import LoginModal from 'components/auth/LoginModal';
import Routes from 'config/routes';
import { setCurrentUser } from 'actions/authActions';
import store from 'configureStore';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      isDesktop: true,
    }
    this.setModalActive = this.setModalActive.bind(this);
    this.setModalInactive = this.setModalInactive.bind(this);
    this.checkWindowResize = this.checkWindowResize.bind(this);
  }

  componentDidMount() {
    if (localStorage.name) {
      let name = localStorage.name;
      let email = localStorage.email;
      store.dispatch(setCurrentUser({ name, email }));
      this.setModalInactive();
    }
    window.addEventListener('resize', this.checkWindowResize);
  }

  componentDidUpdate() {
    if (localStorage.name) {
      let name = localStorage.name;
      let email = localStorage.email;
      store.dispatch(setCurrentUser({ name, email }));
      this.setModalInactive();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
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

  checkWindowResize() {
    if (window.innerWidth < 1006 && this.state.isDesktop) {
      this.setState({ isDesktop: false })
    } else if (window.innerWidth > 1006 && !this.state.isDesktop) {
      this.setState({ isDesktop: true })
    }
  }

  render(){
    return (
      <>
        <div id="body-container" onClick={this.setModalInactive}>
          { window.innerWidth > 1006 ? 
            <>
            <Header setModalActive={this.setModalActive} setModalInactive={this.setModelInactive} />
            <Routes />
            <Footer />
            </>
            :
            <>
            <Routes />
            <Footer />
            <Header setModalActive={this.setModalActive} setModalInactive={this.setModelInactive} />
            </>
          }

        </div>
        {this.state.modalActive ? <LoginModal /> : null}
      </>
    );
  }
}

export default withRouter(App);

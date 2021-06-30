import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import LoginModal from 'components/auth/LoginModal';
import Routes from 'config/routes';
import { setCurrentUser } from 'redux/actions/authActions';
import './App.css';

interface AppProps {
  dispatch: any
};

interface AppState {
  modalActive: boolean
};

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    }
    this.setModalActive = this.setModalActive.bind(this);
    this.setModalInactive = this.setModalInactive.bind(this);
  }

  componentDidMount() {
    if (localStorage.name) {
      let name = localStorage.name;
      let email = localStorage.email;
      this.props.dispatch(setCurrentUser({ name, email }));
      this.setModalInactive();
    }
  }

  componentDidUpdate() {
    if (localStorage.name) {
      let name = localStorage.name;
      let email = localStorage.email;
      setCurrentUser({ name, email });
      this.setModalInactive();
    }
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
        {this.state.modalActive ? <LoginModal /> : null}
      </>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withRouter(App));

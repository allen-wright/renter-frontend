import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const basename = process.env.REACT_APP_BASENAME || "/";

ReactDOM.render(
  <Provider store={store}>
    <Router
      basename={basename}
    >
      <App />
    </Router>
  </Provider>, document.querySelector('#react-root')
);
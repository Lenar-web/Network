import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/datepicker.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./redux/redux-store";


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom/client'; // 'react-dom';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/redux.js';
import './assets/font-awesome/css/font-awesome.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer/Footer';
import './assets/css/main.css'


ReactDOM.render(
  <App />,
  document.getElementById('main')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
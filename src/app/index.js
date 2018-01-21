import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Router, BrowserRouter } from 'react-router-dom'
import history from './history'

ReactDOM.render(
  <Router history= {history}>
    <App currentUser="Adit Bhagat"/>
  </Router>
  , document.getElementById('app'));

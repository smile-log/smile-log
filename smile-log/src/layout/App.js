import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
// import Login from '@/pages/Login/Login'
import Router from './router/Router'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router></Router>
      </div>
    );
  }
}

export default App;

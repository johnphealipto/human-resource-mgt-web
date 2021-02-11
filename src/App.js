import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './pages/login/Login';
import HomePage from './pages/home/Home';
import MyLeave from './pages/myLeave/MyLeave';
import Profile from './components/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/home-page" component={HomePage} />
        <Route path="/my-leave" component={MyLeave} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

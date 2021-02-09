import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from './components/Login/Login';
import DashboardPage from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Home from './routes/home/home';
import Login from './routes/login';
function RouterConfig({ history }: any) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

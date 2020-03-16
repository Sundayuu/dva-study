import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Home from './routes/home/home';
import Login from './routes/login';
import Test from './routes/product';
import NotFund from './routes/notFount';
function RouterConfig({ history }: any) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/test01/home" exact component={Test} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route component={NotFund} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

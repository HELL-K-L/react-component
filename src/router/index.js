import React from "react";

import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bundle from "./Bundle";

import Hello from "bundle-loader?lazy&name=hello!pages/Hello";
import Page from "bundle-loader?lazy&name=page!pages/Page";
import Counter from "bundle-loader?lazy&name=counter!pages/Counter";
import UserInfo from "bundle-loader?lazy&name=userInfo!pages/UserInfo";
import Demo from "bundle-loader?lazy&name=demo!pages/Demo";


const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/userinfo">UserInfo</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Hello)} />
        <Route path="/page" component={createComponent(Page)} />
        <Route path="/counter" component={createComponent(Counter)} />
        <Route path="/userinfo" component={createComponent(UserInfo)} />
        <Route path="/demo" component={createComponent(Demo)} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;

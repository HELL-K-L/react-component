import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { Link } from "react-router-dom";

import "./index.css";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  _handleClick() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  render() {
    return (
      <div className="kylin">
        <ul>
          <li>
            <Link to="/">首页4</Link>
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
        </ul>
        this is home~
        <br />
        当前计数：{this.state.count}
        <br />
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    );
  }
}
export default hot(module)(Home);

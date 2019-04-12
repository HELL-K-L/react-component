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
        this is home 12345~
        <br />
        当前计数：{this.state.count}
        <br />
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    );
  }
}
export default hot(module)(Home);

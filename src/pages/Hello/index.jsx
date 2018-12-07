import React, { PureComponent } from "react";

export default class Home extends PureComponent {
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
      <div>
        this is home~
        <br />
        当前计数：{this.state.count}
        <br />
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    );
  }
}

import React from "react";
import brandLogo from "images/brand-logo.png";


class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={brandLogo} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}



class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX-59,
      y: event.clientY-54
    });
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse>
  {mouse => (
    <p>鼠标的位置是 {mouse.x}，{mouse.y}</p>
  )}
</Mouse>
<Mouse >
{mouse => (
          <Cat mouse={mouse} />
        )}
 </Mouse>
      </div>
    );
  }
}

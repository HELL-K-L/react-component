import React, { PureComponent } from "react";
import brandLogo from "images/brand-logo.png";

export default class Page extends PureComponent {
  render() {
    return (
      <div>
        this is Page~
        <img src={brandLogo} />
      </div>
    );
  }
}

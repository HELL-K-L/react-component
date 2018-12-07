import React from "react";
import ReactDom from "react-dom";
import { AppContainer } from "react-hot-loader";
import getRouter from "router";

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept("./router", () => {
    const getRouter = require("./router").default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>{RootElement}</AppContainer>,
    document.getElementById("app")
  );
}

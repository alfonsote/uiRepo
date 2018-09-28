import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Input } from "antd";
import "antd/dist/antd.css";
ReactDOM.render(
  <div className="panel panel-default col-lg-12">
    <Input className="col-lg-6" placeholder="Basic usage" />
  </div>,
  document.getElementById("container")
);

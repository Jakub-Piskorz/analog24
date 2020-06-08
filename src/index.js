import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductPage from "./App";
import * as serviceWorker from "./serviceWorker";
import logo from "./img/logo.png";

ReactDOM.render(
  <React.StrictMode>
    <nav className="nav">
      <a href="index.html">
        <img className="logo" src={logo} />
      </a>
      <form className="nav-search">
        <div className="nav-search-left"></div>
        <input type="text" className="nav-search-bar" />
        <button className="nav-search-right">Szukaj</button>
      </form>
      <div className="nav-right">
        <div className="nav-right-item basket">Koszyk</div>
        <div className="nav-right-item login">Zaloguj</div>
      </div>
    </nav>
    <ProductPage pics="./img" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

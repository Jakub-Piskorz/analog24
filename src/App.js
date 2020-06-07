import React from "react";
import "./App.css";
import logo from "./img/logo.png";

function App({ name = "", logo = "" }) {
  return (
    <div className="grid">
      <div className="header">
        <img src="img/deal.jpg" title="Deal Zone" alt="Deal Zone" />
      </div>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery">1-3 dni</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery red">Niedostępny</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-2 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <div className="header">
        <img src="img/deal.jpg" title="Deal Zone" alt="Deal Zone" />
      </div>
      <a className="col-3 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-3 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-3 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <a className="col-3 product-card" href="card.html">
        <div className="delivery green">24h</div>
        <img src="img/nokia3310.png" alt="" />
        <div className="product-card-title">
          <p>Komórka Nokia 3310 rocznik 2015</p>
        </div>
        <div className="price">300 zł</div>
      </a>
      <div className="box col-6">Hasło</div>
      <div className="box col-6">Hasło</div>
      <div className="box col-6">Hasło</div>
      <div className="box col-6">Hasło</div>
    </div>
  );
}

export default App;

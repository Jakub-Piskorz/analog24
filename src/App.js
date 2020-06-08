import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import SetPic from "./SetPic";

const ProductPage = (props) => {
  return (
    <div className="product-grid">
      <div className="title">
        <h1>Komórka Nokia 3310 rocznik 2015</h1>
        <h2>Jakiś podtytuł</h2>
      </div>
      <section className="product">
        <img src={require(props.pics+"/pic.png")} />
      </section>
      <div className="product-small1 img"><img src={require(props.pics+"/pic.png")} onClick={SetPic} /></div>
      <div className="product-small2 img"><img src={require(props.pics+"/picsmall-1.jpg")} onClick={SetPic} /></div>
      <div className="product-small3 img"><img src={require(props.pics+"/picsmall-2.png")} onClick={SetPic} /></div>
      <div className="product-small4 img"><img src={require(props.pics+"/picsmall-3.jpg")} onClick={SetPic} /></div>
      <div className="product-small5 img"><img src={require(props.pics+"/picsmall-4.jpg")} onClick={SetPic} /></div>
      <div className="product-small6 img"><img src={require(props.pics+"/picsmall-5.jpg")} onClick={SetPic} /></div>
      <div className="product-small7 img"><img src={require(props.pics+"/picsmall-6.jpg")} onClick={SetPic} /></div>
      <section className="product-right">
        <div className="category">
          <a href="index.html">Elektronika</a>
          >
          <a href="index.html">Telefony</a>
        </div>
        <div className="price">
          300 zł
        </div>
        <div className="delivery green">1-3 dni</div>
        <div className="features">
          <ul>
            <li>Klasyczny telefon</li>
            <li>Przynazny dla starszych osób</li>
            <li>Czas pracy baterii: 7 dni</li>
            <li>Styl: Retro</li>
            <li>Wytrzymałość: Trwardszy niż diament</li>
            <li>Popularność: Wysoki sentyment</li>
          </ul>
        </div>
        <div className="product-buttons">
          <a href="#" className="button-red">Kup teraz</a>
        </div>
      </section>
      {console.log(props.pics + "/nokia.png")}
      <script>
      document.querySelector(".product-small2 a").addEventListener("click", SetPic);
      </script>
        {/* {document.querySelector(".product-small1 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small2 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small3 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small4 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small5 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small6 a").addEventListener("click", SetPic)}
        {document.querySelector(".product-small7 a").addEventListener("click", SetPic)} */}
    </div>
    
  );
  
}

export default ProductPage;

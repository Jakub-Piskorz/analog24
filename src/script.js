const setPic = (event) => {
  console.log(event.path[0].currentSrc);
  document
    .querySelector(".product img")
    .setAttribute("src", event.path[0].currentSrc);
};

let [pic1, pic2, pic3, pic4, pic5, pic6, pic7] = [
  document.querySelector(".product-small1 img"),
  document.querySelector(".product-small2 img"),
  document.querySelector(".product-small3 img"),
  document.querySelector(".product-small4 img"),
  document.querySelector(".product-small5 img"),
  document.querySelector(".product-small6 img"),
  document.querySelector(".product-small7 img"),
];
pic1.addEventListener("click", setPic);
pic2.addEventListener("click", setPic);
pic3.addEventListener("click", setPic);
pic4.addEventListener("click", setPic);
pic5.addEventListener("click", setPic);
pic6.addEventListener("click", setPic);
pic7.addEventListener("click", setPic);

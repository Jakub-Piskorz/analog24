const SetPic = (event) => {
  document
    .querySelector(".product img")
    .setAttribute("src", event.target.src);
};

export default SetPic;

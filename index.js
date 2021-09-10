let button = document.querySelector("button");
let bar = document.querySelector("#bar");
let person = document.querySelector("#person")
let x = window.matchMedia("(max-width:700px)")
let profile = document.querySelector("#profile")
function toggleClass(el) {
  if (el.className == "share") {
    el.className = "share2";
    bar.style.visibility = "visible";

  }
  else {
    el.className = "share";
    bar.style.visibility = "hidden";
  }

  if (x.matches) {
    if (el.className == "share") {

      bar.style.visibility = "hidden"
    }
    else {
     
      bar.style.visibility = "visible"
  button.style.visibility = "hidden"
    profile.innerHTML = `<div id="bar">
    <div id="left">Share
      <img class="icons" src="images/icon-facebook.svg" alt="">
      <img src="images/icon-twitter.svg" alt="" class="icons">
      <img src="images/icon-pinterest.svg" alt="" class="icons">
      </div>
      <button class="share" onclick="toggleClass(this)"></button>
    </div>`;
  
  }}



}
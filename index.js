let button = document.querySelector("#share");
let bar = document.querySelector("#bar");
let person = document.querySelector("#person");
let x = window.matchMedia("(max-width:700px)");
let profile = document.querySelector("#profile");
let profileWrapper = document.querySelector("#profile-wrapper")
function toggleClass(el) {
  if (el.className == "share") {
    document.getElementById("bar").style.visibility = "visible";
    el.className = "share2";
  
  } else {
    el.className = "share";
    bar.style.visibility = "hidden";
   
  }
if(x.matches  && el.className=="share2"){

/*profile.innerHTML= `
<div id="inner-bar"><img class="icons" src="images/icon-facebook.svg" alt="">
  <img src="images/icon-twitter.svg" alt="" class="icons">

<img src="images/icon-pinterest.svg" alt="" class="icons"></div>  <button id="share" class="share" onclick="toggleClass(this)"></button>`
}
else{

//  bar.remove(button)
*/}
}

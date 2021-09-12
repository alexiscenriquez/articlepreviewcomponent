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
button.style.position="absolute";
button.style.bottom="15px";
button.style.zIndex="1";
button.style.right="25px";
person.style.visibility="hidden"
//button.style.width="100%";
}
else{
  person.style.visibility="visible"
  button.style.position="unset"
}

}

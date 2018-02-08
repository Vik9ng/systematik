// almindelig menu
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// burger menu !!

function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-170px";
}

//Data visualisering
window.addEventListener("load", altErLoaded)

function altErLoaded(){

TweenMax.staggerFrom(".column_and_name_container p", 1, {opacity:"0"},-.1);
TweenMax.staggerFrom(".column_and_name_container svg", 1, {width:"0"},.1);

}

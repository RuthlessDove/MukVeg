// getting elements
var hamButton = $('.hamburger-btn')
hamButton.on("click", menu_open)

var closeButton = $('.close-btn')

closeButton.on("click", menu_close)

// functions 
// function to open menu 
// function menu_open() {
//   document.getElementById("mysidebar").style.display = "block";
// }
//function to close menu

function menu_close() {
  
  document.getElementById("mysidebar").style.display = "none";

  document.getElementById("main").style.marginLeft = "0%";
  
  document.getElementById("openNav").style.display = "inline-block";

}

function menu_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mysidebar").style.width = "25%";
  document.getElementById("mysidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

// slideshow begins here ...

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// slideshow ends here ...

//common swaps drop down bar code 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/// object for storing swaps
//event-listener 

var displayCSbox = $('.cs-meat-appear')
var beefButton = $('.dropDownchoice2')
var chickButton = $('.dropDownchoice1')
var eggButton = $('.dropDownchoice3')



function meatswaps_beef() {
  var img = document.getElementById('quornimg')

  img.style.display = "block";

  var lentilimg = document.getElementById('lentilimg')

  lentilimg.style.display = 'block';

  var chickenimg = document.getElementById('chickenimg')
  chickenimg.style.display = "none";

  var eggimg = document.getElementById('tofuimg')

  eggimg.style.display = "none";

    }

function meatswaps_chicken(){
  var img = document.getElementById('chickenimg')
  img.style.display = "block";

  var beefimg = document.getElementById('quornimg')
  beefimg.style.display ="none";

  var eggimg = document.getElementById('tofuimg')

  eggimg.style.display = "none";

  var lentilimg = document.getElementById('lentilimg')

  lentilimg.style.display = 'none';
}

function meatswaps_egg(){
  var img = document.getElementById('tofuimg')

  img.style.display = "block";

  var beefimg = document.getElementById('quornimg')
  beefimg.style.display ="none";

  var chickenimg = document.getElementById('chickenimg')
  chickenimg.style.display = "none";

  var lentilimg = document.getElementById('lentilimg')

  lentilimg.style.display = 'none';

}
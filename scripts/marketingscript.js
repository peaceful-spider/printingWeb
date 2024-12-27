// image lide show script

setInterval(() => {document.querySelector(".main_container").style.backgroundImage = "url(media/images/stickers.jpg)"},3000);
setInterval(() => {document.querySelector(".main_container").style.backgroundImage = "url(media/images/logos2.jpg)"},6000);
setInterval(() => {document.querySelector(".main_container").style.backgroundImage = "url(media/images/nav_logo.png)"},9000);

// marketing material 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("bf");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// flyers and brouchers heading dynamin effect

setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.fontFamily = "algerian"},3000);
setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.color = "#5cb8a4"},3000);
setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.fontFamily = "chiller"},4500);
setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.color = "red"},4500);
setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.fontFamily = "garamond"},6000);
setInterval(() => {document.querySelector("#broucher_flyer_main_container").style.color = "#d4ab17"},6000);

// posters dynamic effect

setInterval(() => {document.querySelector("#posters_heading_container").style.fontFamily = "algerian"},3000);
setInterval(() => {document.querySelector("#posters_heading_container").style.color = "#5cb8a4"},3000);
setInterval(() => {document.querySelector("#posters_heading_container").style.fontFamily = "chiller"},4500);
setInterval(() => {document.querySelector("#posters_heading_container").style.color = "red"},4500);
setInterval(() => {document.querySelector("#posters_heading_container").style.fontFamily = "garamond"},6000);
setInterval(() => {document.querySelector("#posters_heading_container").style.color = "#d4ab17"},6000);

// roll up stand 


setInterval(() => {document.querySelector("#rollupstands").style.fontFamily = "algerian"},3000);
setInterval(() => {document.querySelector("#rollupstands").style.color = "#5cb8a4"},3000);
setInterval(() => {document.querySelector("#rollupstands").style.fontFamily = "chiller"},4500);
setInterval(() => {document.querySelector("#rollupstands").style.color = "red"},4500);
setInterval(() => {document.querySelector("#rollupstands").style.fontFamily = "garamond"},6000);
setInterval(() => {document.querySelector("#rollupstands").style.color = "#d4ab17"},6000);

// logos and stickers 

setInterval(() => {document.querySelector("#ls_header_container").style.fontFamily = "algerian"},3000);
setInterval(() => {document.querySelector("#ls_header_container").style.color = "#5cb8a4"},3000);
setInterval(() => {document.querySelector("#ls_header_container").style.fontFamily = "chiller"},4500);
setInterval(() => {document.querySelector("#ls_header_container").style.color = "red"},4500);
setInterval(() => {document.querySelector("#ls_header_container").style.fontFamily = "garamond"},6000);
setInterval(() => {document.querySelector("#ls_header_container").style.color = "#d4ab17"},6000);

// catoluges and calenders

setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.fontFamily = "algerian"},3000);
setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.color = "#5cb8a4"},3000);
setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.fontFamily = "chiller"},4500);
setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.color = "red"},4500);
setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.fontFamily = "garamond"},6000);
setInterval(() => {document.querySelector(".ctlgs_clnds_title").style.color = "#d4ab17"},6000);

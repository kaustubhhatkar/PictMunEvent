
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "2px 2px";
        document.getElementById("logo-img").style.height = "45px";
        document.getElementById("logo-img").style.width = "50px";
        document.getElementById("nav-bar-right").style.padding = "1% 1% 1% 1%";
    }
    else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo-img").style.height = "100px";
        document.getElementById("logo-img").style.width = "120px";
        document.getElementById("nav-bar-right").style.padding = "3% 2% 3% 2%";
    }
}

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
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
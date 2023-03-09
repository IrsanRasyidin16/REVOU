let slideIndex = 0;
var slides = document.getElementsByClassName("slideshow-slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Waktu slide, dalam milidetik
}

showSlides();

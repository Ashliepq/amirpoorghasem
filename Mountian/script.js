// Variables Start
let $ = document;
let openNav = $.getElementById("open-nav");
let closeNav = $.getElementById("close-nav");
let nav = $.getElementById("navbar");
let slider = $.querySelector(".slider-images");
let sliderImages = $.querySelectorAll(".slider-images .image");

// Variables Ends

// Defined Sunctions Starts
function openMenu() {
  openNav.style.display = "block";
  nav.style.display = "none";
  closeNav.style.display = "none";
}

function scrolled() {
  let sliderScrolledPX = slider.scrollLeft;
  let windowWidth = slider.scrollWidth - document.documentElement.clientWidth;
  percentOfScrolledSlider = (sliderScrolledPX * 100) / windowWidth;

  if (percentOfScrolledSlider >= 0 && percentOfScrolledSlider <= 32) {
    console.log("Animation");
    sliderImages[0].classList.add("slider-images-animation");
    sliderImages[2].classList.remove("slider-images-animation");
    sliderImages[1].classList.remove("slider-images-animation");
  }
  if (percentOfScrolledSlider >= 33 && percentOfScrolledSlider <= 65) {
    console.log("Animation");
    sliderImages[1].classList.add("slider-images-animation");
    sliderImages[0].classList.remove("slider-images-animation");
    sliderImages[2].classList.remove("slider-images-animation");
  }
  if (percentOfScrolledSlider >= 66 && percentOfScrolledSlider <= 100) {
    console.log("Animation");
    sliderImages[2].classList.add("slider-images-animation");
    sliderImages[1].classList.remove("slider-images-animation");
    sliderImages[0].classList.remove("slider-images-animation");
  }
}
// Defined Sunctions Ends

// Nav Bar Codes Starts
openNav.addEventListener("click", function () {
  openNav.style.display = "none";
  nav.style.display = "flex";
  closeNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
  openMenu();
});

window.addEventListener("resize", function () {
  if (this.document.body.clientWidth > 600) {
    openNav.style.display = "none";
    nav.style.display = "flex";
    closeNav.style.display = "none";
  } else {
    openMenu();
  }
});
// Nav Bar Codes Ends

// Slider Codes Starts
console.log(document.documentElement.clientWidth);

slider.addEventListener("scroll", function (event) {
  scrolled();
});

// Slider Codes Ends

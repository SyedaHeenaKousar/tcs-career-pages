function showElement(id) {
  var hiddenDiv = document.getElementById(id);
  hiddenDiv.style.display = "block";
}

function hidePrevious(ids) {
  for (var i = 0; i < ids.length; i++) {
    var gg = document.getElementById(ids[i]);
    gg.style.display = "none";
  }
}
// info box code end
// What We Do 
function showFirstElement() {
  showElement("info-box-1");
}
function hidePreviousElement() {
  hidePrevious(["info-box-2", "info-box-3", "info-box-4", "info-box-5"]);
}


// First set of functions
function showElement1() {
  showElement("info-box-1");
}

function hidePrevious1() {
  hidePrevious(["info-box-2", "info-box-3", "info-box-4", "info-box-5"]);
}

// Second set of functions
function showElement2() {
  showElement("info-box-2");
}

function hidePrevious2() {
  hidePrevious(["info-box-1", "info-box-3", "info-box-4", "info-box-5"]);
}

// Third set of functions
function showElement3() {
  showElement("info-box-3");
}

function hidePrevious3() {
  hidePrevious(["info-box-1", "info-box-2", "info-box-4", "info-box-5"]);
}

// Fourth set of functions
function showElement4() {
  showElement("info-box-4");
}

function hidePrevious4() {
  hidePrevious(["info-box-1", "info-box-2", "info-box-3", "info-box-5"]);
}

// Fifth set of functions
function showElement5() {
  showElement("info-box-5");
}

function hidePrevious5() {
  hidePrevious(["info-box-1", "info-box-2", "info-box-3", "info-box-4"]);
}


//info box functon ends

//info box fiunction second 

// WHo we Are
function showFirstElement2() {
  showElement("info-box-6");
}

function hidePreviousElement2() {
  hidePrevious(["info-box-7", "info-box-8", "info-box-9"]);
}



// First set of functions
function showElement6() {
  showElement("info-box-6");
}

function hidePrevious6() {
  hidePrevious(["info-box-7", "info-box-8", "info-box-9"]);
}


// Second set of functions
function showElement7() {
  showElement("info-box-7");
}

function hidePrevious7() {
  hidePrevious(["info-box-6", "info-box-8", "info-box-9"]);
}

// Third set of functions
function showElement8() {
  showElement("info-box-8");
}

function hidePrevious8() {
  hidePrevious(["info-box-6", "info-box-7", "info-box-9"]);
}

// Fourth set of functions
function showElement9() {
  showElement("info-box-9");
}

function hidePrevious9() {
  hidePrevious(["info-box-6", "info-box-8", "info-box-7"]);
}



//info box function second ends

//info box third 
// Insights
function showFirstElement3() {
  showElement("info-box-10");
}

function hidePreviousElement3() {
  hidePrevious(["info-box-11", "info-box-12", "info-box-13", "info-box-14"]);
}


// First set of functions
function showElement10() {
  showElement("info-box-10");
}

function hidePrevious10() {
  hidePrevious(["info-box-11", "info-box-12", "info-box-13", "info-box-14"]);
}


// Second set of functions
function showElement11() {
  showElement("info-box-11");
}

function hidePrevious11() {
  hidePrevious(["info-box-10", "info-box-12", "info-box-13", "info-box-14"]);
}

// Third set of functions
function showElement12() {
  showElement("info-box-12");
}

function hidePrevious12() {
  hidePrevious(["info-box-11", "info-box-10", "info-box-13", "info-box-14"]);
}

// Fourth set of functions
function showElement13() {
  showElement("info-box-13");
}

function hidePrevious13() {
  hidePrevious(["info-box-11", "info-box-12", "info-box-10", "info-box-14"]);
}

// Fifth set of functions
function showElement14() {
  showElement("info-box-14");
}

function hidePrevious14() {
  hidePrevious(["info-box-11", "info-box-12", "info-box-13", "info-box-10"]);
}


//info box third ends



//info box fourth

// carrer
function showFirstElement4() {
  showElement("info-box-15");
}

function hidePreviousElement4() {
  hidePrevious(["info-box-16", "info-box-17", "info-box-18", "info-box-19", "info-box-20"]);
}


// First set of functions
function showElement15() {
  showElement("info-box-15");
}

function hidePrevious15() {
  hidePrevious(["info-box-16", "info-box-17", "info-box-18", "info-box-19", "info-box-20"]);
}



// Second set of functions
function showElement16() {
  showElement("info-box-16");
}

function hidePrevious16() {
  hidePrevious(["info-box-15", "info-box-17", "info-box-18", "info-box-19", "info-box-20"]);
}

// Third set of functions
function showElement17() {
  showElement("info-box-17");
}

function hidePrevious17() {
  hidePrevious(["info-box-16", "info-box-15", "info-box-18", "info-box-19", "info-box-20"]);
}

// Fourth set of functions
function showElement18() {
  showElement("info-box-18");
}

function hidePrevious18() {
  hidePrevious(["info-box-16", "info-box-17", "info-box-15", "info-box-19", "info-box-20"]);
}

// Fifth set of functions
function showElement19() {
  showElement("info-box-19");
}

function hidePrevious19() {
  hidePrevious(["info-box-16", "info-box-17", "info-box-18", "info-box-15", "info-box-20"]);
}

// Sixth set of functions
function showElement20() {
  showElement("info-box-20");
}

function hidePrevious20() {
  hidePrevious(["info-box-16", "info-box-17", "info-box-18", "info-box-19", "info-box-15"]);
}


    //info box fourth ends
function displynavbarmegamenu(){
var navElement = document.getElementById("somethimnav");
  if (navElement.style.display === "none") {
    navElement.style.display = "flex";
  } else {
    navElement.style.display = "none";
  }
}
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 6,
  centeredSlides: true,
  spaceBetween: -5,
  //  loop: true,
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
});
var slideIndex = 0;
var slides = document.getElementsByClassName("slide-123");
var cards = document.getElementsByClassName("card-123");
var cardSlider = document.querySelector(".card-slider-123");
var prevButton = document.querySelector(".prev-123");
var nextButton = document.querySelector(".next-123");
var activeCardIndex = 0; // Track the index of the active card

displayImage(0); // Show the first image initially

// Add event listeners to the buttons
prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

// Show the previous slide
function showPrevSlide() {
  displayImage(slideIndex - 1);
}

// Show the next slide
function showNextSlide() {
  displayImage(slideIndex + 1);
}

function displayImage(index) {
  showSlide(index);

  // Remove active class from all cards
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }

  // Add active class to the clicked card
  cards[index].classList.add("active");

  // Hide or show the prev/next buttons based on index
  if (index === 0) {
    prevButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  } else if (index === slides.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }

  // Apply slide-left class if index is greater than 0
  if (index > 0) {
    cardSlider.classList.add("slide-left");
  } else {
    cardSlider.classList.remove("slide-left");
  }

  // Update the overlay based on the active card
  updateOverlay(index);

  slideIndex = index;
}

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}

function updateOverlay(index) {
  var activeOverlay = slides[activeCardIndex].querySelector(".overlay-123");
  var newOverlay = slides[index].querySelector(".overlay-123");

  // Stop the previous active overlay
  activeOverlay.style.backgroundColor = "";

  // Start the new overlay
  setTimeout(function () {
    newOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }, 1000);

  activeCardIndex = index; // Update the active card index
}
var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 4,
  spaceBetween: 30,
  mousewheel: false,
  allowSlideClick: false,
  simulateTouch: false,   // Disable touch simulation
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button_next-1",
    prevEl: ".swiper-button_prev-1",
  },
  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex;
      var slides = this.slides;

      // Reset the gradient on all slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("gradient-slide");
      }

      // Add the gradient to the 4th slide when the 1st slide is active
      if (activeIndex === 0) {
        slides[3].classList.add("gradient-slide");
      }

      // Add the gradient to the 5th slide when the 2nd slide is active
      if (activeIndex === 1) {
        slides[4].classList.add("gradient-slide");
      }
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.closest('.locations').querySelector('.content');
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.textContent = '-';
      } else {
        content.style.display = 'none';
        this.textContent = '+';
      }
    });
  });
});


  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: ".bi-arrow-right-short",
      prevEl: ".bi-arrow-left-short",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
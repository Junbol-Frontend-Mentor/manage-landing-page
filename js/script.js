document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript file is connected');

  // Existing hamburger menu functionality
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu');

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  });

  //---- Form Validation -------------

  const form = document.getElementById('newsletterForm'); // 🟢
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message'); //

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = emailInput.value;
    errorMessage.textContent = ''; // Clear any previous error message

    if (!email) {
      errorMessage.textContent = 'Please enter your email address.'; //
    } else if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.'; //
    } else {
      console.log('Form submitted successfully');
      // Add your form submission logic here
    }
  });

  function validateEmail(email) {
    // validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

//------  Carousel Logic --------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

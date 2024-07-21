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
    //when the user click oon the Go button
    event.preventDefault(); // Prevent the form from submitting normally

    const email = emailInput.value; //input field's value
    errorMessage.textContent = ''; // Clear any previous error message

    if (!email) {
      //if there is no email in the input field
      errorMessage.textContent = 'Please enter your email address.'; //
    } else if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.'; //add this in the div
    } else {
      console.log('Form submitted successfully');
      // Add your form submission logic here
    }
  });

  function validateEmail(email) {
    // validation fo the email given
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

//------  Carousel Logic --------------

let slideIndex = 1; /* Initial slide index */
showSlides(slideIndex); /* Display the initial slide 1 */

/* Advances the slide index by n (next/prev) and shows the slide */
function plusSlides(n) {
  showSlides((slideIndex += n)); // so this will be transform into showSlides(2)
}

/* Sets the current slide to n and shows it */
function currentSlide(n) {
  // n = 2
  showSlides((slideIndex = n)); //slideIndex = 2.Remember that this will be transform   slides[slideIndex - 1] below into 1 and 1 in array index is the second slide
}

//Displays the slide corresponding to the current slide index
function showSlides(n) {
  //slideIndex = 2
  // n = 2
  let i;
  let slides = document.getElementsByClassName('mySlides'); // slides will be the Array of all slides
  let dots = document.getElementsByClassName('dot'); // slides will be the Array of all slides
  if (n > slides.length) {
    slideIndex = 1;
  } // Loop back to the first slide if n exceeds slide count
  if (n < 1) {
    slideIndex = slides.length;
  } /* Loop to the last slide if n is less than 1 */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; /* Hide all slides */
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', ''); /* Deactivate all dots */
  }
  slides[slideIndex - 1].style.display =
    'block'; /* Display the current slide. The -1 adjustment is necessary to align the slideIndex with the zero-based indexing of JavaScript arrays. -1 is added to get rid of the default let slideIndex = 1; declaration

  For example let suppose the user click on the third dot then this will be happening: slides[3-1] which is transformed into slides[2]
  Why because if you had this slide[3] there is no third array index only: 0, 1 and 2 because we have 3 items.And if you need to show the last item you to slide[2]
  */

  dots[slideIndex - 1].className += ' active'; /* Activate the corresponding dot */
}

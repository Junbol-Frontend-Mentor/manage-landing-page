document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript file is connected');

  let myHamburgerIcon = document.getElementById('hamburgerIcon');
  let myNavMenu = document.getElementById('navigationMenu');

  myHamburgerIcon.addEventListener('click', function () {
    myHamburgerIcon.classList.toggle('change');
    myNavMenu.classList.toggle('navTop_container__navMenu--visible');
  });
});

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

  // Flowbite carousel functionality
  const carouselElement = document.getElementById('default-carousel');

  const items = [
    { position: 0, el: document.querySelector('[data-carousel-item="0"]') },
    { position: 1, el: document.querySelector('[data-carousel-item="1"]') },
    { position: 2, el: document.querySelector('[data-carousel-item="2"]') },
    { position: 3, el: document.querySelector('[data-carousel-item="3"]') },
  ];

  const options = {
    defaultPosition: 0,
    interval: 3000,
    indicators: {
      items: [
        { position: 0, el: document.querySelector('[data-carousel-slide-to="0"]') },
        { position: 1, el: document.querySelector('[data-carousel-slide-to="1"]') },
        { position: 2, el: document.querySelector('[data-carousel-slide-to="2"]') },
        { position: 3, el: document.querySelector('[data-carousel-slide-to="3"]') },
      ],
    },
  };

  const carousel = new flowbite.Carousel(carouselElement, items, options);
});

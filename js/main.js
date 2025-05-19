/* === Equalizer bars (hero) ================================ */
document.addEventListener('DOMContentLoaded', () => {
  const eqWrap = document.getElementById('eqWrap');
  for (let i = 0; i < 42; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.animationDelay = (Math.random() * 1.6).toFixed(2) + 's';
    eqWrap.appendChild(bar);
  }

  /* === Burger menu ======================================== */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  /* === Swiper carrousels ================================== */
  ['grupoA', 'grupoB', 'grupoC', 'grupoE'].forEach(cls => {
    new Swiper('.' + cls, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: { el: '.' + cls + ' .swiper-pagination', clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  });

  /* === AOS scroll animations ============================== */
  AOS.init({
    once:true,          // solo una vez
    duration:700,       // ms
    offset:120          // px antes de viewport
  });
});

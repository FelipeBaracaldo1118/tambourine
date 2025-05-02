
console.log('Slider script cargado');

document.addEventListener('DOMContentLoaded', () => {
  console.log(' DOM listo, inicializando slider');

  const slides = [
    {
      subtitle: 'Subheadline',
      heading:  'Stunning Location',
      text:     'From the picturesque Linear Park to the sprawling and elegant Grande Ballroom, Reunion Resort & Golf Club offers gorgeous ceremony settings.',
      bg:       '/assets/img/banner1.jpg',
      img:      '/assets/img/banner1.jpg',
      number:   '01'
    },
    {
      subtitle: 'Subheadline',
      heading:  'Stunning Location',
      text:     'Enjoy lush fairways, scenic lakes and world-class amenities—perfect for both ceremony and photos.',
      bg:       '/assets/img/banner2.jpg',
      img:      '/assets/img/banner2.jpg',
      number:   '02'
    },
    {
      subtitle: 'Subheadline',
      heading:  'Stunning Location',
      text:     'Bask in golden-hour sunsets over the golf course or host your reception under the stars—possibilities are endless.',
      bg:       '/assets/img/banner3.jpg',
      img:      '/assets/img/banner3.jpg',
      number:   '03'
    }
  ];

  let current = 0;  // índice de la slide activa

  
  const section   = document.getElementById('slider_location');
  const subtitle  = section.querySelector('.location_card_subtitle');
  const heading   = section.querySelector('.location_card_heading');
  const textEl    = section.querySelector('.location_card_text');
  const image     = section.querySelector('.location_card_media_img');
  const numberEl  = section.querySelector('.location_card_number');
  const prevLink  = section.querySelector('.location_card_btn_info.prev');
  const nextLink  = section.querySelector('.location_card_btn_info.next');

  // Funcion para renderizar una slide
  function showSlide(idx) {
    const s = slides[idx];
    // Fondo de la seccion
    section.style.backgroundImage = `url(${s.bg})`;
    // Contenido de la tarjeta
    subtitle.textContent = s.subtitle;
    heading.innerHTML  = s.heading;
    textEl.textContent   = s.text;
    image.src            = s.img;
    image.alt            = s.heading;
    numberEl.textContent = s.number;
  }


  //  Eventos Prev/Next
  prevLink.addEventListener('click', e => {
    e.preventDefault();
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
  nextLink.addEventListener('click', e => {
    e.preventDefault();
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // 5) Inicializa en la primera slide
  showSlide(current);
});

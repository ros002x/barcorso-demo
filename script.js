const menus = {
  breakfast: [
    ['Caff&egrave; espresso', 'Classico al banco o al tavolo.', '&euro; --'],
    ['Cornetti caldi', 'La partenza giusta, dal mattino presto.', '&euro; --'],
    ['Pasticciotto', 'Crema e amarena, con espressino.', '&euro; --'],
    ['Espressino', 'Perfetto con il dolce della mattina.', '&euro; --'],
    ['Crepe Nutella', 'Con Nutella e granella.', '&euro; --']
  ],
  fresh: [
    ['Crema caff&egrave;', 'Fresca e cremosa.', '&euro; --'],
    ['Yogurt', 'Per una pausa pi&ugrave; leggera.', '&euro; --'],
    ['Bibite fresche', 'Chiedi cosa trovi al banco.', '&euro; --']
  ],
  aperitivo: [
    ['Spritz', 'Preparato al momento.', '&euro; --'],
    ['Drink', 'Chiedi la proposta del banco.', '&euro; --'],
    ['Aperitivo', 'Da prendere fuori, davanti alla piazza.', '&euro; --'],
    ['Stuzzichini', 'Da condividere al tavolo.', '&euro; --']
  ]
};

const grid = document.querySelector('.menu-cards');

function render(key) {
  grid.innerHTML = menus[key].map(([name, text, price]) => `
    <article class="menu-line">
      <div>
        <h3>${name}</h3>
        <p>${text}</p>
      </div>
      <strong class="menu-price">${price}</strong>
    </article>
  `).join('');
}

render('breakfast');

document.querySelectorAll('.menu-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.menu-tabs .active')?.classList.remove('active');
    button.classList.add('active');
    render(button.dataset.tab);
  });
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

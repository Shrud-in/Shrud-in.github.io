document.addEventListener('DOMContentLoaded', function () {
  const loadingDiv = document.getElementById('loading');
  const mainContentDiv = document.getElementById('main-content');
  const confettiContainer = document.getElementById('confetti-container');
  const balloonsContainer = document.getElementById('balloons-container');

  setTimeout(() => {
    loadingDiv.style.display = 'none';
    mainContentDiv.style.display = 'flex';
    mainContentDiv.style.animation = 'fade-in 2s ease';
  }, 3000);

  function createElements(container, className, quantity) {
    for (let i = 0; i < quantity; i++) {
      const element = document.createElement('div');
      element.className = className;
      element.style.top = `${Math.random() * 100}vh`;
      element.style.left = `${Math.random() * 100}vw`;
      container.appendChild(element);
    }
  }

  function createShapes(container) {
    if (!container) {
      return;
    }

    const shapes = [
      { class: 'confetti-circle', color: '#d13447' },
      { class: 'confetti-rectangle', color: '#ffbf00' },
      { class: 'confetti-triangle', color: '#263672' },
    ];

    shapes.forEach(shapeData => {
      const shape = document.createElement('div');
      shape.className = shapeData.class;
      shape.style.backgroundColor = shapeData.color;
      container.appendChild(shape);
    });
  }

  const confettiQuantity = confettiContainer.getAttribute('data-confetti') || 0;
  const balloonsQuantity = balloonsContainer.getAttribute('data-balloons') || 0;

  createConfetti(confettiContainer, confettiQuantity);
  createElements(balloonsContainer, 'balloons', balloonsQuantity);
  createShapes(confettiContainer); // Adjusted container for shapes

  function redirectTo(link) {
    const links = {
      link1: 'https://www.youtube.com/watch?v=l5LTjJ5Fs3Y&pp=ygUsc2VuZCB0aGlzIHRvIHlvdXIgZ2lybGZyaWVuZCBvbiBoZXIgYmlydGhkYXk%3D',
      link2: 'https://example.com/gift2',
      link3: 'https://example.com/gift3',
      link4: 'https://example.com/gift4',
      link5: 'https://example.com/gift5',
      link6: 'https://example.com/gift6',
    };

    if (links.hasOwnProperty(link)) {
      window.location.href = links[link];
    }
  }

  // Event listeners for button clicks
  document.getElementById('buttons').addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      redirectTo(event.target.getAttribute('data-link'));
    }
  });
});

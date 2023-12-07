document.addEventListener('DOMContentLoaded', function () {
  const loadingDiv = document.getElementById('loading');
  const mainContentDiv = document.getElementById('main-content');
  const confettiContainer = document.getElementById('confetti-container');
  const balloonsContainer = document.getElementById('balloons-container');

  // Show the loader for a few seconds
  setTimeout(() => {
      loadingDiv.style.opacity = '0'; // Hide the loader
      setTimeout(() => {
          loadingDiv.style.display = 'none'; // Remove the loader from the DOM
      }, 500); // Change the duration if needed
      mainContentDiv.style.opacity = '1'; // Make the main content visible
  }, 3000);

  // Only animate the heart during preloader
  if (loadingDiv.style.opacity === '1') {
      const heartElement = document.querySelector('.heart');
      heartElement.style.animation = 'heartbeat 1s infinite';
  }

//   createShapes(confettiContainer);

  const confettiQuantity = parseInt(confettiContainer.getAttribute('data-confetti')) || 0;
  const balloonsQuantity = parseInt(balloonsContainer.getAttribute('data-balloons')) || 0;

  console.log(confettiQuantity, balloonsQuantity);

//   createElements(confettiContainer, 'confetti', confettiQuantity);
//   createElements(balloonsContainer, 'balloons', balloonsQuantity);
//   createShapes(document.querySelector('.background-shapes'));

  // Additional code for confetti animation
  createConfetti(confettiContainer, confettiQuantity);

  function createElements(container, className, quantity) {
      for (let i = 0; i < quantity; i++) {
          const element = document.createElement('div');
          element.className = className;
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
          setPosition(shape, container.clientWidth, container.clientHeight);
          container.appendChild(shape);
      });
  }

  function createConfetti(container, quantity) {
      for (let i = 0; i < quantity; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.backgroundColor = getRandomColor();
          setPosition(confetti, container.clientWidth, container.clientHeight);
          container.appendChild(confetti);
      }
  }

  function setPosition(element, containerWidth, containerHeight) {
    const randomX = Math.random() * containerWidth;
    const randomY = Math.random() * containerHeight;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
  }

  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

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
});

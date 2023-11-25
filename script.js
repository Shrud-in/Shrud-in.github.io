document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading with heartbeat animation
    const loadingDiv = document.getElementById('loading');
    const mainContentDiv = document.getElementById('main-content');
    const confettiContainer = document.getElementById('confetti-container');
    const balloonsContainer = document.getElementById('balloons-container');
  
    setTimeout(() => {
      loadingDiv.style.display = 'none';
      mainContentDiv.style.display = 'block';
      mainContentDiv.style.animation = 'fade-in 2s ease';
    }, 3000); // Simulating 3 seconds of loading time
  
    function createElements(container, className, quantity) {
      for (let i = 0; i < quantity; i++) {
        const element = document.createElement('div');
        element.className = className;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        container.appendChild(element);
      }
    }
  
    const confettiQuantity = confettiContainer.getAttribute('data-confetti') || 0;
    const balloonsQuantity = balloonsContainer.getAttribute('data-balloons') || 0;
  
    createElements(confettiContainer, 'confetti', confettiQuantity);
    createElements(balloonsContainer, 'balloons', balloonsQuantity);
  
    // Create and append shapes
    createShapes(mainContentDiv);
  
    // Define the redirectTo function
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
  
  function createShapes(container) {
    const shapes = [
      { class: 'shape1', color: '#a18cd1', top: '10%', left: '10%', size: '150px' },
      { class: 'shape2', color: '#fbc2eb', top: '30%', left: '70%', size: '120px' },
      { class: 'shape3', color: '#7fad91', top: '70%', left: '20%', size: '100px' },
    ];
  
    shapes.forEach(shapeData => {
      const shape = document.createElement('div');
      shape.className = shapeData.class;
      shape.style.backgroundColor = shapeData.color;
      shape.style.borderRadius = '50%';
      shape.style.position = 'absolute';
      shape.style.top = shapeData.top;
      shape.style.left = shapeData.left;
      shape.style.width = shapeData.size;
      shape.style.height = shapeData.size;
      shape.style.transform = 'rotate(45deg)';
      container.appendChild(shape);
    });
  }
  
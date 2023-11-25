document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading with heartbeat animation
    const loadingDiv = document.getElementById('loading');
    const mainContentDiv = document.getElementById('main-content');
  
    setTimeout(() => {
      loadingDiv.style.display = 'none';
      mainContentDiv.style.display = 'block';
      mainContentDiv.style.animation = 'fade-in 2s ease';
    }, 3000); // Simulating 3 seconds of loading time
  
    // Define the redirectTo function
    function redirectTo(link) {
      const links = {
        link1: 'https://example.com/gift1',
        link2: 'https://example.com/gift2',
        link3: 'https://example.com/gift3',
        link4: 'https://example.com/gift4',
        link5: 'https://example.com/gift5',
        link6: 'https://example.com/gift6',
      };
  
      window.location.href = links[link] || '#';
    }
  
    // Create multiple confetti and balloons
    const confettiContainer = document.getElementById('confetti-container');
    const balloonsContainer = document.getElementById('balloons-container');
  
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confettiContainer.appendChild(confetti);
  
      const balloon = document.createElement('div');
      balloon.className = 'balloons';
      balloonsContainer.appendChild(balloon);
    }
  
    
  
  });
  
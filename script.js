document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading with heartbeat animation
    const loadingDiv = document.getElementById('loading');
    const mainContentDiv = document.getElementById('main-content');
  
    setTimeout(() => {
      loadingDiv.style.display = 'none';
      mainContentDiv.style.display = 'block';
      mainContentDiv.style.animation = 'fade-in 2s ease';
    }, 3000); // Simulating 3 seconds of loading time
  
    // Redirect to the specified link
    function redirectTo(link) {
      switch (link) {
        case 'link1':
          window.location.href = 'https://www.youtube.com/watch?v=l5LTjJ5Fs3Y&pp=ygUsc2VuZCB0aGlzIHRvIHlvdXIgZ2lybGZyaWVuZCBvbiBoZXIgYmlydGhkYXk%3D';
          break;
        case 'link2':
          window.location.href = 'https://example.com/gift2';
          break;
        case 'link3':
          window.location.href = 'https://example.com/gift3';
          break;
        case 'link4':
          window.location.href = 'https://example.com/gift4';
          break;
        case 'link5':
          window.location.href = 'https://example.com/gift5';
          break;
        case 'link6':
          window.location.href = 'https://example.com/gift6';
          break;
        default:
          break;
      }
    }
  });
  
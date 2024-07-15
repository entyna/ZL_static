document.addEventListener('DOMContentLoaded', function () {
    var animationContainer = document.getElementById('lottie-icon');
  
    // Load the animation
    var animation = lottie.loadAnimation({
      container: animationContainer, // the DOM element to contain the animation
      renderer: 'svg',
      loop: false, // Set to false because we want to control the playback
      autoplay: false, // Set to false to play on hover
      path: '/assets/icons8-facebook.json' // the path to the animation JSON file
    });
  
    // Play animation on hover
    animationContainer.addEventListener('mouseenter', function () {
      animation.goToAndPlay(0); // Restart the animation from the beginning
    });
  
    // Stop animation on mouse leave (optional)
    animationContainer.addEventListener('mouseleave', function () {
      animation.stop();
    });
  });
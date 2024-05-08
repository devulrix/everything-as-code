document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

  $(document).ready(function () {
    var $menu = $('#TableOfContents');
    var $toggleButton = $('#toggle-menu');
    var offsetTop = $menu.offset().top;
    // Toggle menu visibility on mobile
    $toggleButton.on('click', function() {
      $menu.toggle(); // Simple show/hide toggle
    });
  
    // Function to handle scrolling and positioning
    function handleScroll() {
      var scrollTop = $(window).scrollTop();
      var windowWidth = $(window).width();
  
      if (windowWidth >= 1024) {
        if (scrollTop >= offsetTop) {
          $menu.css({
            position: 'fixed',
            top: '100',
            right: '',
            zIndex: '1000',
            width: $menu.parent().width() // Maintain the width
          });
        } else {
          $menu.css({
            position: 'static',
            top: '100',
            right: '',
            width: ''
          });
        }
      } else {
        // Ensure the menu is not fixed on small screens
        $menu.css({
          position: 'static',
          width: '' // Reset width to auto for smaller screens
        });
      }
    }
  
    // Attach scroll and resize events
    $(window).on('scroll', handleScroll);
    $(window).on('resize', handleScroll);
  
    // Initial call in case the page loads at a position other than top
    handleScroll();
  });
  
  
  
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

  $(document).ready(function() {
    var lastId,
        topMenu = $("#TableOfContents"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    $(window).scroll(function(){
       var fromTop = $(this).scrollTop() + topMenuHeight;
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           menuItems
             .removeClass("is-active")
             .filter("[href='#"+id+"']").addClass("is-active");
       }                   
    });
});


// Dark Mode
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleButton.classList.remove('is-white');
      toggleButton.classList.add('is-black');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleButton.classList.remove('is-black');
      toggleButton.classList.add('is-white');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  // Check for saved user preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    // Set the initial theme based on the user's preference
    setTheme(prefersDarkScheme.matches);
  }

  // Listen for changes in the user's preference and update the theme accordingly
  toggleButton.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });

  // Listen for changes in the user's system preference and update the theme accordingly
  prefersDarkScheme.addEventListener('change', event => {
    setTheme(event.matches);
  });
});
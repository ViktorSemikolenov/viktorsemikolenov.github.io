window.onload = function () {
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      var imageElements = document.querySelectorAll('.lazy');
      imageElements.forEach(c=> c.setAttribute('src',c.getAttribute('data-original')));
    }, 0);
    window.setTimeout(function () {
      document.body.classList.remove('loaded_hiding');
    }, 0);
  }

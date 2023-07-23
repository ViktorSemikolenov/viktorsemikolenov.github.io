document.addEventListener('DOMContentLoaded', function() {
    var filterItems = document.querySelectorAll('.filter-countries__item');
  
    filterItems.forEach(function(item) {
      item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          filterItems.forEach(function(item) {
            item.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });
  });
  
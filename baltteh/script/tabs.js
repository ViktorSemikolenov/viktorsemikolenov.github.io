document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab-btn');
  var tabContents = document.querySelectorAll('.tab-content');

  // Обработчик клика на вкладку
  tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
          var tabId = this.getAttribute('data-tab');

         

          //оказать выбранное содержимое вкладки
          tabContents.forEach(function(content) {
              if (content.id === tabId) {
                  content.classList.add('tab-active');
              } else {
                  content.classList.remove('tab-active');
              }
          });

          // Удалить класс "active" со всех вкладок
          tabs.forEach(function(tab) {
              tab.classList.remove('active');
          });

          // Добавить класс "active" выбранной вкладке
          this.classList.add('active');
      });
  });

  // По умолчанию открыть первую вкладку при загрузке страницы
  tabs[0].click();
});
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab-btn');
    var tabContents = document.querySelectorAll('.tab-content');
  
    // Обработчик клика на вкладку
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
  
        // Показать выбранное содержимое вкладки
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
        
        // Обновить URL с параметром ID вкладки
        history.pushState(null, null, '?tab=' + tabId);
      });
    });
  
    // Поиск параметра ID вкладки в URL
    var urlParams = new URLSearchParams(window.location.search);
    var tabId = urlParams.get('tab');
    var tabToSelect = document.querySelector('[data-tab="' + tabId + '"]');
    
    // Открыть выбранную вкладку, если она найдена, иначе открыть первую вкладку
    if (tabToSelect) {
      tabToSelect.click();
    } else {
      tabs[0].click();
    }
  });
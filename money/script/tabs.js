function openTab(evt, tabName) {
    // Declare variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('tab-content-active');
    }
  
    // Get all elements with class="tab" and remove the class "tab-active"
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add('tab-content-active');
    evt.currentTarget.className += " tab-active";
  }

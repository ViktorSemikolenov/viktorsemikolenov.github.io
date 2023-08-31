function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    
    const formattedTime = hours + ':' + minutes;
    
    return formattedDate + ' (' + formattedTime + ')';
  }
  
  const currentDate = new Date();
  const timerPage = document.querySelector('.timer-page');
  timerPage.textContent = formatDate(currentDate);

  function updateTime() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    timerPage.textContent = formattedDate;
  }
  
  setInterval(updateTime, 1000);
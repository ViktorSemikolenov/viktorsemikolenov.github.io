const panelItems = document.querySelectorAll('.panel-item');
let startX, startWidth;

function startDrag(e) {
  const handle = e.target.closest('.handle');
  if (!handle) return; // Если событие произошло не на ручке изменения размера, просто выйдем из функции

  const item = handle.parentElement;
  startX = e.clientX;
  startWidth = item.offsetWidth;
  item.classList.add('resizing');
}

function stopDrag() {
  const resizingItem = document.querySelector('.resizing');
  if (!resizingItem) return; // Проверка, если resizingItem равен null, просто выходим из функции
  resizingItem.classList.remove('resizing');
}

function drag(e) {
  const resizingItem = document.querySelector('.resizing');
  if (!resizingItem) return;
  
  let mouseX;
  if (e.type === 'touchmove') {
    mouseX = e.touches[0].clientX;
  } else {
    mouseX = e.clientX;
  }

  const diffX = mouseX - startX;
  const newWidth = startWidth + diffX;

  resizingItem.style.width = `${newWidth}px`;

  const otherItems = Array.from(panelItems).filter(item => item !== resizingItem);
  const totalWidth = otherItems.reduce((acc, curr) => acc + curr.offsetWidth, 0);

  otherItems.forEach(item => {
    const ratio = item.offsetWidth / totalWidth;
    const newOtherWidth = (totalWidth - newWidth) * ratio;
    item.style.width = `${newOtherWidth}px`;
  });
}

panelItems.forEach(item => {
  item.addEventListener('mousedown', startDrag);
  item.addEventListener('touchstart', startDrag);
});

document.documentElement.addEventListener('mouseup', stopDrag);
document.documentElement.addEventListener('touchend', stopDrag);
document.documentElement.addEventListener('mousemove', drag);
document.documentElement.addEventListener('touchmove', drag);




// --------------------------------------------------------
// Получение всех элементов с классом .toggle-button
var toggleButtons = document.querySelectorAll('.toggle-button');

// Перебор всех кнопок
toggleButtons.forEach(function(button) {
  // Добавление обработчика события click для каждой кнопки
  button.addEventListener('click', function() {
    // Добавление или удаление класса hidden у дочерних элементов .input-inside
    var inputInside = this.parentNode.querySelectorAll('.input-inside');
    inputInside.forEach(function(element) {
      element.classList.toggle('hidden');
    });
    
    // Добавление класса collapsed к самой кнопке
    this.classList.toggle('collapsed');
  });
});

// ======================================================================


// Получаем элементы с классами "collapse-all", "input-inside" и "toggle-button"
const collapseAllButton = document.querySelector('.collapse-all');
const inputInsideElementsOne = document.querySelectorAll('.input-inside');
const toggleButtonOne = document.querySelector('.toggle-button');

// Функция для добавления классов "hidden" и "collapsed"
function collapseAll() {
  inputInsideElementsOne.forEach(element => {
    element.classList.add('hidden');
  });

  toggleButtonOne.classList.add('collapsed');
}

// Назначаем обработчик события на клик по элементу с классом "collapse-all"
collapseAllButton.addEventListener('click', collapseAll);

// ===============================================================================
// Получаем элементы с классами "expand-all", "input-inside" и "toggle-button"
const expandAllButton = document.querySelector('.expand-all');
const inputInsideElements = document.querySelectorAll('.input-inside');
const toggleButton = document.querySelector('.toggle-button');

// Функция для удаления классов "hidden" и "collapsed"
function expandAll() {
  inputInsideElements.forEach(element => {
    element.classList.remove('hidden');
  });

  toggleButton.classList.remove('collapsed');
}

// Назначаем обработчик события на клик по элементу с классом "expand-all"
expandAllButton.addEventListener('click', expandAll);




// =================================================================



$(document).ready(function() {
  $('.input-label').click(function() {
    var inputElements = $(this).parent().find('input');
    
    if (inputElements.prop('checked')) {
      inputElements.prop('checked', false);
    } else {
      inputElements.prop('checked', true);
    }
  });
});




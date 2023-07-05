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


// Получаем все элементы с классом "toggle-button"
const toggleButtonsOne = document.querySelectorAll('.toggle-button');

// Функция для добавления или удаления класса "level-hidden" у первого родителя с классом ".level-input__inputs"
function toggleLevelHiddenClass(event) {
  const toggleButtonOne = event.target;
  const levelInputParent = toggleButtonOne.closest('.level-input__inputs');
  
  if (levelInputParent) {
    levelInputParent.classList.toggle('level-hidden');
  }
}

// Назначаем обработчик события на клик для каждого элемента с классом "toggle-button"
toggleButtonsOne.forEach(button => {
  button.addEventListener('click', toggleLevelHiddenClass);
});

// ===============================================================================
// Получаем все элементы с классом ".input-label"
var inputLabels = document.querySelectorAll(".input-label");

// Перебираем полученные элементы и назначаем обработчик события клика
for (var i = 0; i < inputLabels.length; i++) {
  inputLabels[i].addEventListener("click", function() {
    // Находим родительский элемент с классом ".level-input__inputs"
    var parent = this.closest(".level-input__inputs");
    
    if (parent) {
      // Получаем все элементы input внутри родительского элемента
      var inputs = parent.getElementsByTagName("input");

      // Перебираем полученные элементы input и устанавливаем атрибут "checked"
      for (var j = 0; j < inputs.length; j++) {
        inputs[j].checked = true;
      }
    }
  });
}


// =================================================================

// Получаем все элементы с классом ".input-label"
var inputLabels = document.querySelectorAll(".input-label");

// Перебираем полученные элементы и назначаем обработчик события клика
for (var i = 0; i < inputLabels.length; i++) {
  inputLabels[i].addEventListener("click", function() {
    // Находим родительский элемент с классом ".level-input__inputs"
    var parent = this.closest(".level-input__inputs");

    if (parent) {
      // Получаем все элементы input внутри родительского элемента
      var inputs = parent.getElementsByTagName("input");

      // Перебираем полученные элементы input
      for (var j = 0; j < inputs.length; j++) {
        // Проверяем, есть ли атрибут "checked"
        if (inputs[j].hasAttribute("checked")) {
          // Если атрибут есть, то удаляем его и класс "checked"
          inputs[j].removeAttribute("checked");
          inputs[j].classList.remove("checked");
        } else {
          // Если атрибута нет, то добавляем его и класс "checked"
          inputs[j].setAttribute("checked", "checked");
          inputs[j].classList.add("checked");
        }
      }
    }
  });
}



// ===================================
// Получаем все элементы с классом ".toggle-button"
const toggleButtonsP = document.querySelectorAll('.toggle-button');

// Получаем элемент с классом ".level-input__inputs"
const levelInputs = document.querySelector('.level-input__inputs');

// Получаем элемент с классом ".collapse-all"
const collapseAllButton = document.querySelector('.collapse-all');

// Добавляем обработчик события для нажатия на элемент с классом ".collapse-all"
collapseAllButton.addEventListener('click', function() {
  // Перебираем все элементы с классом ".toggle-button"
  toggleButtonsP.forEach(function(button) {
    // Добавляем класс "collapsed"
    button.classList.add('collapsed');
  });

  // Добавляем класс "level-hidden" к элементу с классом ".level-input__inputs"
  levelInputs.classList.add('level-hidden');
});
// ========================================================
// Получаем все элементы с классом ".toggle-button"
const toggleButtonsL = document.querySelectorAll('.toggle-button');

// Получаем элемент с классом ".level-input__inputs"
const levelInputsL = document.querySelector('.level-input__inputs');

// Получаем элемент с классом ".expand-all"
const expandAllButton = document.querySelector('.expand-all');

// Добавляем обработчик события для нажатия на элемент с классом ".expand-all"
expandAllButton.addEventListener('click', function() {
  // Перебираем все элементы с классом ".toggle-button"
  toggleButtonsL.forEach(function(button) {
    // Удаляем класс "collapsed"
    button.classList.remove('collapsed');
  });

  // Удаляем класс "level-hidden" у элемента с классом ".level-input__inputs"
  levelInputsL.classList.remove('level-hidden');
});

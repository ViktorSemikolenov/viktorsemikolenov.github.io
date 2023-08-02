// Получаем все элементы с классом "delivery-method__header-item"
const deliveryItems = document.querySelectorAll('.delivery-method__header-item');

// Добавляем обработчик события для каждого элемента
deliveryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Удаляем класс "active" у всех элементов
    deliveryItems.forEach(item => {
      item.classList.remove('active');
    });

    // Добавляем класс "active" только к текущему элементу
    item.classList.add('active');
  });
});


// Получаем элементы DOM
var deliveryMethod = document.querySelector('.delivery-method__delivery');
var addressInput = document.querySelector('.address-input');
var typeDelivery = document.querySelector('.type-delivery');
var addressMap = document.querySelector('.address-map');

// Добавляем обработчик события при нажатии на .delivery-method__delivery
deliveryMethod.addEventListener('click', function() {
  // Добавляем класс 'visible' к .address-input
  addressInput.classList.add('visible');

  // Изменяем текст внутри .type-delivery на 'Доставка'
  typeDelivery.textContent = 'Доставка';

  // Добавляем класс 'hidden' к .address-map
  addressMap.classList.add('hidden');
});


// Получаем необходимые элементы
const pickupMethod = document.querySelector('.delivery-method__pickup');

// Добавляем обработчик события на клик по элементу .delivery-method__pickup
pickupMethod.addEventListener('click', function() {
  // Удаляем класс 'visible' у элемента .address-input
  addressInput.classList.remove('visible');

  // Меняем текст элемента .type-delivery на 'Самовывоз'
  typeDelivery.textContent = 'Самовывоз';

  // Удаляем класс 'hidden' у элемента .address-map
  addressMap.classList.remove('hidden');
});


// Получаем ссылки на элементы DOM
var paymentMethodTwo = document.querySelector('.payment-method-two');
var paymentMethodOnes = document.querySelectorAll('.payment-method-one');
var orderFormTypeOne = document.querySelector('.order-form__form-type-one');
var orderFormTypeTwo = document.querySelector('.order-form__form-type-two');

// Добавляем обработчик события на клик по "payment-method-two"
paymentMethodTwo.addEventListener('click', function() {
  // Добавляем класс "visible" к "order-form__form-type-two"
  orderFormTypeTwo.classList.add('visible');

  // Удаляем класс "visible" у "order-form__form-type-one"
  orderFormTypeOne.classList.remove('visible');
});

// Добавляем обработчик события на клик по каждому элементу с классом "payment-method-one"
paymentMethodOnes.forEach(function(paymentMethodOne) {
  paymentMethodOne.addEventListener('click', function() {
    // Добавляем класс "visible" к "order-form__form-type-one"
    orderFormTypeOne.classList.add('visible');

    // Удаляем класс "visible" у "order-form__form-type-two"
    orderFormTypeTwo.classList.remove('visible');
  });
});

// Находим все кнопки с классом "btn-delete"
var deleteButtons = document.getElementsByClassName('btn-delete');

// Перебираем найденные кнопки и добавляем обработчик события клика
Array.from(deleteButtons).forEach(function(button) {
  button.addEventListener('click', function() {
    // Находим родительский элемент с классом "product-card" для текущей кнопки
    var productCard = button.closest('.product-card');

    // Проверяем, что родительский элемент найден, а затем удаляем его
    if (productCard) {
      productCard.remove();
    }
  });
});



// Находим все кнопки с классом "btn-delete"
var deleteButtonsTwo = document.getElementsByClassName('product-card__status_add');

// Перебираем найденные кнопки и добавляем обработчик события клика
Array.from(deleteButtonsTwo).forEach(function(button) {
  button.addEventListener('click', function() {
    // Находим родительский элемент с классом "product-card" для текущей кнопки
    var productCardTwo = button.closest('.product-card');

    // Проверяем, что родительский элемент найден, а затем удаляем его
    if (productCardTwo) {
      productCardTwo.remove();
    }
  });
});


// Находим все элементы с классом product-card__status_add
const addToCartButtons = document.querySelectorAll(".product-card__status_add");

// Создаем функцию-обработчик события добавления товара в корзину
function addToCartHandler() {
// Получаем родительский элемент с классом .product-card
const productCardNew = this.closest(".product-card");

// Клонируем элемент
const clonedProductCard = productCardNew.cloneNode(true);

// Находим контейнер с классом .section-basket__product-col_product
const basketContainer = document.querySelector(".section-basket__product-col_product");

// Добавляем клонированный элемент в контейнер
basketContainer.appendChild(clonedProductCard);
}

// Добавляем обработчик события на каждую кнопку
addToCartButtons.forEach((button) => {
button.addEventListener("click", addToCartHandler);
});




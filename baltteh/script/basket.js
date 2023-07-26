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

// Добавляем обработчик события приажатии на .delivery-method__delivery
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
const deliveryType = document.querySelector('.type-delivery');

// Добавляем обработчик события на клик по элементу .delivery-method__pickup
pickupMethod.addEventListener('click', function() {
  // Удаляем класс 'visible' у элемента .address-input
  addressInput.classList.remove('visible');
  
  // Меняем текст элемента .type-delivery на 'Самовывоз'
  deliveryType.textContent = 'Самовывоз';
  
  // Удаляем класс 'hidden' элемента .address-map
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
  
  // Добавляем классhidden" к "order-form__form-type-one"
  orderFormTypeOne.classList.add('hidden');
});

// Добавляем обработчик события на клик по каждому элементу с классом "payment-method-one"
paymentMethodOnes.forEach(function(paymentMethodOne) {
  paymentMethodOne.addEventListener('click', function() {
    // Добавляем класс "visible" к "order-form__form-type-two"
    orderFormTypeTwo.classList.remove('visible');
    
    // Добавляем класс "hidden" к "order-form__form-type-one"
    orderFormTypeOne.classList.remove('hidden');
  });
});
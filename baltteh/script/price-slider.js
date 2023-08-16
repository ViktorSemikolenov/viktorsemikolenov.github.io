function setupProductFilter(parentElement) {
  const rangeInput = parentElement.querySelectorAll(".range-input input"),
  priceInput = parentElement.querySelectorAll(".price-input input"),
  range = parentElement.querySelector(".slider .progress");
  let priceGap = 1;
  
  priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
  let minPrice = parseFloat(priceInput[0].value),
  maxPrice = parseFloat(priceInput[1].value);
  if ((maxPrice - minPrice >= priceGap) && maxPrice <= parseFloat(rangeInput[1].max)) {
    if (e.target.className === "input-min") {
      rangeInput[0].value = minPrice;
      range.style.left = ((minPrice / parseFloat(rangeInput[0].max)) * 1) + "%";
    } else {
      rangeInput[1].value = maxPrice;
      range.style.right = 1 - (maxPrice / parseFloat(rangeInput[1].max)) * 1 + "%";
    }
  }
});
});

rangeInput.forEach((input) => {
input.addEventListener("input", (e) => {
let minVal = parseFloat(rangeInput[0].value),
maxVal = parseFloat(rangeInput[1].value);
if ((maxVal - minVal) < priceGap) {
  if (e.target.className === "range-min") {
    rangeInput[0].value = maxVal - priceGap;
  } else {
    rangeInput[1].value = minVal + priceGap;
  }
} else {
  priceInput[0].value = minVal;
  priceInput[1].value = maxVal;
  range.style.left = ((minVal / parseFloat(rangeInput[0].max)) * 1) + "%";
  range.style.right = 1 - (maxVal / parseFloat(rangeInput[1].max)) * 1 + "%";
}
});
});
}

// Применяем функцию для всех элементов .product-filter__body
const productFilterBodies = document.querySelectorAll('.product-filter__body');
productFilterBodies.forEach(setupProductFilter);
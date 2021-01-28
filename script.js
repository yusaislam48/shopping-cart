// iphone 11 (+) btn event handler
const plusBtn1 = document.getElementById('plusBtn1');
plusBtn1.addEventListener('click', function () {
   const quantityNumber = quantityPlus("quantityOfIphone11");
   priceTotal("iphone11PriceTotal", quantityNumber, 1219);
   subTotalAndTotal();
})

// iphone 11 (-) btn event handler
const minusBtn1 = document.getElementById('minusBtn1');
minusBtn1.addEventListener('click', function () {
   const quantityNumber = quantityMinus("quantityOfIphone11");
   priceTotal("iphone11PriceTotal", quantityNumber, 1219);
   subTotalAndTotal();
})

// iphone 11 Silicon Case (+) btn event handler
const plusBtn2 = document.getElementById('plusBtn2');
plusBtn2.addEventListener('click', function () {
   const quantityNumber = quantityPlus("quantityOfSiliconCase");
   priceTotal("casePriceTotal", quantityNumber, 59);
   subTotalAndTotal();
})

// iphone 11 (-) btn event handler
const minusBtn2 = document.getElementById('minusBtn2');
minusBtn2.addEventListener('click', function () {
   const quantityNumber = quantityMinus("quantityOfSiliconCase");
   priceTotal("casePriceTotal", quantityNumber, 59);
   subTotalAndTotal();
})

const checkOutBtn = document.getElementById('checkOutBtn');
checkOutBtn.addEventListener('click', function () {
   const cart = document.getElementById("cart");
   cart.style.display = "none";
   const orderConfirmation = document.getElementById('orderConfirmation');
   orderConfirmation.style.display = "block";
})




function quantityPlus(id) {
   const quantity = document.getElementById(id).value;
   const quantityNumber = parseFloat(quantity) + 1;
   document.getElementById(id).value = quantityNumber;
   return quantityNumber;
}
function quantityMinus(id) {
   const quantity = document.getElementById(id).value;
   const quantityNumber = parseFloat(quantity);
   if (quantityNumber <= 0) {
      document.getElementById(id).value = 0;
   }
   else{
      document.getElementById(id).value = quantityNumber - 1;
   }
   return quantityNumber;
}
function priceTotal(id, quantityNumber, price) {
   const realPrice = price;
   document.getElementById(id).innerText = realPrice * quantityNumber;
}
function subTotalAndTotal() {
   const iphone11PriceTotal = document.getElementById('iphone11PriceTotal').innerText;
   const iphone11PriceTotalNumber = parseFloat(iphone11PriceTotal);

   const casePriceTotal = document.getElementById('casePriceTotal').innerText;
   const casePriceTotalNumber = parseFloat(casePriceTotal);

   document.getElementById('subTotal').innerText = iphone11PriceTotalNumber + casePriceTotalNumber;
   document.getElementById('total').innerText = iphone11PriceTotalNumber + casePriceTotalNumber;
}
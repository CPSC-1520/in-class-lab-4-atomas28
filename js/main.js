
// Enter your code below.

//Step 1
let newOrderForm = document.querySelector("#new-order-form");



newOrderForm.addEventListener('submit', function(event){

  event.preventDefault();

  let formItemName = event.target.elements['order-item-name'].value; 
  let formItemPrice = event.target.elements['order-item-price'].value;
  let formOrderSize = event.target.elements['order-size'].value;
  console.log(formItemName)
  
  
  console.log(addOrderItem)

  let isFormValid = true;
  
  //3.
  //a.
  if(isValueNotEmpty(formItemName))
  {
    event.target.elements['order-item-name'].classList.remove("is_invalid");
  }
  //b.
  else 
  {
    event.target.elements['order-item-name'].classList.add("is-invalid");
    
    isFormValid = false;
  }
  event.target.reset();

  //5.
  //a. 
  if(isValueNotEmpty(formItemPrice) && isGreaterThanFive(parseFloat(formItemPrice)))
  {
    event.target.elements['order-item-price'].classList.remove("is_invalid");
  }
  else
  {
    event.target.elements['order-item-price'].classList.add("is_invalid");
    
    isFormValid = false;
  }
  event.target.reset();

  

  // 6.

  if(isValueNotEmpty(formOrderSize))
  {
    event.target.elements['order-size'].classList.remove("is-invalid");
    
  }
  else
  {
    event.target.elements['order-size'].classList.add("is-invalid");
    
    isFormValid = false;
  }
  event.target.reset();

  

  if(isFormValid) {
    addOrderItem(formItemName, formItemPrice, formOrderSize);
    event.target.reset();
    console.log("Form is valid, submission success.");
  }
  else
  {
    console.log("Form is invalid, Submission failed.");
    event.target.reset();
  }

});


// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}
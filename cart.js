// cart.js

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart from sessionStorage
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Display the cart items
    displayCart(cart);
});

// Function to display cart items
function displayCart(cart) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Clear previous content
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemImage = document.createElement('img');
        itemImage.src = item.imageSrc;
        itemImage.alt = item.name;
        itemImage.style.width = '100px';

        const itemPrice = document.createElement('p');

        itemPrice.textContent = `Price: ₹${item.price}`;

        // Quantity dropdown
        const quantityDropdown = createQuantityDropdown(item.quantity);
        quantityDropdown.addEventListener('change', function () {
            if (this.value === 'remove') {
                // Remove the item from the cart when 'Remove' is selected
                cart = cart.filter(cartItem => cartItem.name !== item.name);
            } else {
                // Update the quantity in the cart when the dropdown changes
                item.quantity = parseInt(this.value);
            }

            // Save the updated cart to sessionStorage
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCart(cart);
        });

        cartItemDiv.appendChild(itemName);
        cartItemDiv.appendChild(itemImage);
        cartItemDiv.appendChild(itemPrice);
        cartItemDiv.appendChild(quantityDropdown);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Calculate and display the total
    if (cart.length > 0) {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        cartTotalElement.textContent = `Total: ₹${total.toFixed(2)}`;
    } else {
        cartTotalElement.textContent = 'Your shopping cart is waiting. Give it purpose fill it with groceries, clothing, household supplies, electronics and more. Happy Shopping!';
    }
}

// Function to create a quantity dropdown
function createQuantityDropdown(selectedQuantity) {
    const dropdown = document.createElement('select');
    for (let i = 0; i <= 4; i++) {
        const option = document.createElement('option');
        option.value = i === 0 ? 'remove' : i;
        option.textContent = i === 0 ? '0 Qty' : `${i} Qty`;
        option.selected = i === selectedQuantity;
        dropdown.appendChild(option);
    }
    return dropdown;
}
function checkout() {
    // const total = calculateTotal(cart);
    window.location.href='payment.html';
    sessionStorage.removeItem('cart');
    displayCart([]);
}
document.getElementById("buyBtn").addEventListener("click", function () {
    buyPage.style.padding = "44px";
    buyPage.style.display = "block";

    contentPage.innerHTML = `
           
       
      <h3>Enter Detail : </h3>
      <input type="text" placeholder="Enter Your Name" id="name"> <br>
      <input type="text" placeholder="Enter Your Adress" id="adress"> <br>
      <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
      <h3>Payment Option :</h3>
      <select name="" id="">
          <option value="Google-Pay">Google-Pay</option>
          <option value="Phone-Pay">Phone-Pay</option>
          <option value="Bharat-Pay">Bharat-Pay</option>
          <option value="Cash on Delivery">Cash on Delivery</option>


      </select><br>
      
       
          `;

    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";

    contentPage.appendChild(submitBtn);
    submitBtn.addEventListener("click", function () {
      let name = document.getElementById("name");
      let address = document.getElementById("adress");
      let num = document.getElementById("num");

      if (name.value == "" && address.value == "" && num.value == "") {
        alert("Please Enter Detail");
      } else {
        alert("Your Response Recorded");
        buyPage.style.display = "none";
      }
    });

    document.querySelector(".cross").addEventListener("click", function () {
      buyPage.style.display = "none";
    });
  });


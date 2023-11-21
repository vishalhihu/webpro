// navbar home..
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";

})

reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(0, 196, 196)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})

contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(0, 196, 196)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})


// navbar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// item page

let card = document.querySelectorAll(".crd");
let pageImg = document.querySelector("#itemImg");
let container = document.querySelector(".container");

let nav = document.querySelector("nav");
let itemPage = document.querySelector(".itemPage");
// itemPage.style.display = "none";

console.log(pageImg);
console.log(card);



// card.forEach(function (curValue) {
//   curValue.addEventListener("click", function () {
//     itemPage.style.display = "block";
//     itemPage.style.display = "flex";

//     container.style.display = "none";
//     let imgSrc = curValue.firstElementChild.src;
//     pageImg.src = imgSrc;

     


//     let contentPage = document.querySelector(".content");
//     let buyPage = document.querySelector(".buyPage");

//     document.getElementById("buyBtn").addEventListener("click", function () {
//       buyPage.style.padding = "44px";
//       buyPage.style.display = "block";

//       contentPage.innerHTML = `
             
         
//         <h3>Enter Detail : </h3>
//         <input type="text" placeholder="Enter Your Name" id="name"> <br>
//         <input type="text" placeholder="Enter Your Adress" id="adress"> <br>
//         <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
//         <h3>Payment Option :</h3>
//         <select name="" id="">
//             <option value="Google-Pay">Google-Pay</option>
//             <option value="Phone-Pay">Phone-Pay</option>
//             <option value="Bharat-Pay">Bharat-Pay</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>


//         </select><br>
        
         
//             `;

//       let submitBtn = document.createElement("button");
//       submitBtn.innerText = "Submit";

//       contentPage.appendChild(submitBtn);
//       submitBtn.addEventListener("click", function () {
//         let name = document.getElementById("name");
//         let address = document.getElementById("adress");
//         let num = document.getElementById("num");

//         if (name.value == "" && address.value == "" && num.value == "") {
//           alert("Please Enter Detail");
//         } else {
//           alert("Your Response Recorded");
//           buyPage.style.display = "none";
//         }
//       });

//       document.querySelector(".cross").addEventListener("click", function () {
//         buyPage.style.display = "none";
//       });
//     });
//   });
// });






function connect(){
    // let name = document.getElementById("name");
    // let num = document.getElementById("number");


    var name = document.getElementById("name").value.trim();
    var number = document.getElementById("number").value.trim();

    // Validation checks
    if (name === "" || number === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!/^[a-zA-Z ]{1,15}$/.test(name)) {
        alert("Invalid name. Only letters and spaces allowed, max 15 characters.");
        return false;
    }

    if (!/^\d{10}$/.test(number)) {
        alert("Invalid mobile number. It should be 10 digits only.");
        return false;
    }

    if(name.value == "" && num.value == ""){
        alert("Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }
    window.location.href="index.html";
}




let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
// Function to add item to the cart
function addToCart(productName, price,imageSrc) {
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
      // Increment quantity if the product is already in the cart
      existingProduct.quantity++;
  } else {
      // Add the product to the cart with quantity 1
      cart.push({ name: productName, price: price, quantity: 1,imageSrc: imageSrc});
  }
  alert(`Product "${productName}" added to cart!`);
  updateCartDisplay();
} 

function openCart() {
  // Save the cart to sessionStorage
  sessionStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}



// Function to update the cart display in the navbar
function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCount.textContent = totalItems > 0 ? totalItems : '';
}

let isExpanded = false;
const reviewText = document.getElementById('reviewText');
const reviewText1 = document.getElementById('reviewText1');
const reviewText2 = document.getElementById('reviewText2');
function expandReview() {
    if (!isExpanded) {
        // Expand the text to show the full content on hover
        reviewText.classList.remove('collapsed-text');
    }
}
function expandReview1() {
  if (!isExpanded) {
      reviewText1.classList.remove('collapsed-text');
  }
}
function expandReview2() {
  if (!isExpanded) {
      reviewText2.classList.remove('collapsed-text');
  }
}

function collapseReview() {
    if (!isExpanded) {
        // Collapse the text when the mouse leaves
        reviewText.classList.add('collapsed-text');
    }
}
function collapseReview1() {
  if (!isExpanded) {
      reviewText1.classList.add('collapsed-text');
  }
}
function collapseReview2() {
  if (!isExpanded) {
      reviewText2.classList.add('collapsed-text');
  }
}

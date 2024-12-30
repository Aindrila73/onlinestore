           //***another process***//

// // Get navigation links element
// var navlinks = document.getElementById("navlinks");

// // Function to show the menu
// function showMenu() {
//     navlinks.style.right = "0"; // Move nav links into view
// }

// // Function to hide the menu
// function hideMenu() {
//     navlinks.style.right = "-200px"; // Move nav links out of view
// }

// // Get the product and category container elements
// let productDiv = document.querySelector(".product");
// var CategoryListDiv = document.querySelector(".categoryList");

// // Array to store all categories
// let allCate = [];

// // Function to fetch and display products
// let displayProduct = async (allCheckCate = []) => {
//     console.log(allCheckCate);    
//     productDiv.innerHTML = ''; // Clear previous products
    
//     // Fetch products from the API
//     let response = await fetch('https://fakestoreapi.com/products');
//     let products = await response.json();

//     // Process each product
//     for (let product of products) {
//         // Add new categories to the checkbox list
//         if (!allCate.includes(product.category)) {
//             CategoryListDiv.innerHTML += `<label>
//                 <input type="checkbox" class="categoryCheckbox" value="${product.category}">${product.category}
//             </label>`;
//             allCate.push(product.category); // Add category to the list
//         }
//     }

//     // Filter and display products
//     for (let product of products) {
//         if (allCheckCate.length === 0 || allCheckCate.includes(product.category)) {
//             productDiv.innerHTML += `<div class="productitem">
//                 <img src="${product.image}" alt="">
//                 <h6>${product.category}</h6>
//                 <p>Price: $${product.price} | Rating: ${product.rating.rate}</p>
//                 <h3>${product.title}</h3>
//                 <h5>Add to cart</h5>
//             </div>`;
//         }
//     }
// };

// // Initial display of products
// displayProduct();

// // Event listener for category checkboxes
// CategoryListDiv.addEventListener('change', (event) => {
//     if (event.target.classList.contains('categoryCheckbox')) {
//         let checkboxes = document.querySelectorAll(".categoryCheckbox:checked");
//         let selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value);
//         displayProduct(selectedCategories);
//     }
// });

            //**team.html javascript**// 
            



           
          //***  // localStorage.setItem('cart', JSON.stringify(cart)); explain this coding line in a simple easyest way
            // Sure! Let's break it down step by step:
            
            // localStorage: This is a built-in web storage object that allows you to store data right in your web browser. It's like a small database that your website can use to remember things.
            
            // .setItem(): This is a method (a function) of localStorage that saves a piece of data. It needs two pieces of information: a key and a value.
            
            // 'cart': This is the key, or the name, under which we store our data. Think of it like a label for the data you're storing.
            
            // JSON.stringify(cart): This is a method that converts the JavaScript object cart into a string. This is necessary because localStorage can only save strings, not objects.



            // window.onload = async () => { ... }://*** */

            // This line sets up a function that will run as soon as the web page finishes loading. The async keyword allows the use of await inside the function for handling asynchronous operations.

            // Function to clear the cart
// function clearCart() {
//     cart = [];
//     totalPrice = 0;
    
//     // Clear localStorage
//     localStorage.removeItem('cart');
//     localStorage.removeItem('totalPrice');
    
//     updateCart();
// }


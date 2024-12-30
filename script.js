var navlinks = document.getElementById("navlinks");

function showMenu() {
    navlinks.style.right = "0";
}

function hideMenu() {
    navlinks.style.right = "-200px";
}

//fdunction to update the cart count

let productDiv = document.querySelector(".product");
var CategoryListDiv = document.querySelector(".categoryList");
let allCate = [];
let cart = [];
let totalPrice = 0;



// Function to fetch and display products
let displayProduct = async (allCheckCate = []) => {
    console.log(allCheckCate);
    productDiv.innerHTML = ""; // Clear previous products

    // Fetch products from the API
    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();

    // Iterate through each product
    finalProduct.forEach(element => {
        // category data
        if (!allCate.includes(element.category)) {
            CategoryListDiv.innerHTML += `<label>
                <input type="checkbox" onclick='categoryFilter()' value="${element.category}">${element.category}
            </label>`;
            allCate.push(element.category);
        }


        // If no category is selected, display all categories
        if (allCheckCate.length == 0) {
            allCheckCate = allCate;
        }

        // Check if the product category is in the selected categories
        if (allCheckCate.includes(element.category)) {

            const aTitle = element.title.length > 50 
            ? element.title.slice(0, 40) + '...'
            : element.title;
            // product data
            productDiv.innerHTML += `<div class="productitem">
                <img src="${element.image}" alt="">
                <h6>${element.category}</h6>
                <p class="price">Price :<span> $</span>${element.price} | Rating: ${element.rating.rate}</p>
                <p class="title" title="${element.title}">${aTitle}</p>
                <button class="btn" onclick="moreDetails('${element.id}')">More Details</button>
                <button class="btn" onclick="addToCart('${element.image}', '${element.price}', '${element.title.replace(/'/g, "\\'")}', '${element.category.replace(/'/g, "\\'")}')">Add to Cart</button>
            </div>`;
        }
    });
};
// Function to handle search input 

// Initial display of products
displayProduct();

// Function to filter products based on selected categories
let categoryFilter = () => {
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkdata = [];

    // Iterate through each checkbox
    checkInput.forEach((e) => {
        if (e.checked) {
            checkdata.push(e.value);
        }
    });

    // Display products based on selected categories
    displayProduct(checkdata);
};

//prodetails///
function moreDetails(productId) {
    localStorage.setItem('productDetails', productId);
    window.location.href = 'productdetails.html';
}
//call  the updatecart count funtion when the page loads



// Function to add a product to the cart
function addToCart(image, price, title, category) {
    let cartItem = { image, price, title, category, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let itemIndex = cart.findIndex(item => item.title === title);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;  // Increase quantity if item already exists
    } else {
        cart.push(cartItem);  // Add new item to cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
   }


// Function to update the cart display and total price
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cartItems.innerHTML = "";  // Clear previous cart items

    cart.forEach((item, index) => {
        const bTitle = item.title.length > 50 
            ? item.title.slice(0, 50) + '...'
            : item.title;
        cartItems.innerHTML += `<div class="cartitem" data-index="${index}">
            <img src="${item.image}" alt="">
            <div class="quantity">
                <button class="decrease-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <h3 title="${item.title}">${bTitle}</h3>
            <p>Price : $${item.price}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>`;
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    }

// Function to change the quantity of a product
function changeQuantity(index, delta) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Initial update of cart display on page load
updateCart();

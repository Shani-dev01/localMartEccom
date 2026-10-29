const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const breadCrums = document.querySelector(".breadcrumbs");
const categoryImage = document.querySelector(".categories-img");
const categoryTitle = document.querySelector(".categories-title h3");
const productGrid = document.querySelector(".products-grid");
const noProducts = document.querySelector(".noProducts");
const productsCount = document.querySelector("#productCount span");
const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");
let categoryProducts = [];
let products = [];
let USD_TO_INR = 95;



const laodProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();

    products = data.products.map((product) => {
      let discount = product.discountPercentage;

      let priceInINR = Math.round(product.price * USD_TO_INR);

      let discountPrice = Math.round((priceInINR * discount) / 100);
      let finalPrice = priceInINR - discountPrice;

      return {
        ...product,
        priceInINR: priceInINR,
        discountPrice: discountPrice,
        finalPrice: finalPrice,
      };
    });

    categoryPage(products);
  } catch (error) {
    console.error(error);
  }
};

laodProducts();

breadCrums.innerHTML = `
    <a href="Homepage.html">Home</a>
      <span class="separator">&gt;</span>
      <a href="categories.html">Categories</a>
      <span class="separator">&gt;</span>
      <span class="current">${category}</span>
`;

// Logic for filter category products
const categoryPage = (products) => {
  let categoryItem = products.filter((product) => {
    return product.category === category;
  });
  categoryProducts = categoryItem;
  categoryBanner(categoryProducts);

  renderProductCards(categoryProducts);  
};

// Logic for render category image
const categoryBanner = (categoryProducts) => {
  if (categoryProducts) {
    categoryTitle.innerHTML = `${category}`;
    categoryImage.innerHTML = `
    <img src="${categoryProducts[0]?.thumbnail}" alt="">
    `;
  } else {
    categoryTitle.innerHTML = `No Category Found`;
  }
};



const renderProductCards = (categoryProducts) => {
  productGrid.innerHTML=''
  
  productsCount.textContent=`${categoryProducts.length}`
  categoryProducts.forEach((product) => {
    
    productGrid.innerHTML += `
    <article class="product-card">

        <div class="product-image">
            <span class="discount-badge">-${Math.floor(product.discountPercentage)}% OFF</span>
            <button class="wishlist-btn" type="button"
                    aria-label="Add to wishlist">
                ♡
            </button>
            <img
                src="${product.thumbnail}"
                alt="Product image"
            >
        </div>

        <div class="product-info">
            <p class="product-category">${category}</p>

            <h3>${product.title}</h3>

            <div class="product-rating">
                <span>★</span>
                <strong>${product.rating}</strong>
                <span class="review-count">(120 reviews)</span>
            </div>

            <div class="product-pricing">
                <span class="product-price">₹ ${product.finalPrice}</span>
                <span class="old-price">₹${product.priceInINR}</span>
            </div>

            <p class="product-stock">✓ ${product.availabilityStatus}</p>

            <button class="add-cart-btn" type="button">
                <span>＋</span> Add to Cart
            </button>
        </div>

    </article>
    `;
    
  });
};



const filterProduct = (categoryProducts) => { 
  const  min = minPrice.value === "" ? 0 : Number(minPrice.value);
  const  max = maxPrice.value === "" ? Infinity : Number(maxPrice.value);

  if (min === '' && max === '') {
    renderProductCards(categoryProducts);
  }
  
  
  const filtredItems = categoryProducts.filter((product)=>{
    return product.finalPrice >= min && product.finalPrice <= max 
  })
  
  renderProductCards(filtredItems);
}


minPrice.addEventListener('input', ()=>{filterProduct(categoryProducts)})
maxPrice.addEventListener('input', ()=>{filterProduct(categoryProducts)})
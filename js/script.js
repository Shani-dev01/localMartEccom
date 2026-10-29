
const bannerDots = document.querySelectorAll(".banner-dots");
const bannersDiv = document.querySelector(".banner-partitions");
const categoryItems = document.querySelector(".category-item");
const ourProductCards = document.querySelector(".our-product-card-container");
const rentalProductCards = document.querySelector(".rental-product-card");

let finalProducts = [];
let bannerProduct = [];
let currentIndex = 0;
let slideTimer;
let sallingProducts = ["kitchen", "home-living", "tech", "fashion"];

let bannersProducts = [
  {
    id: 1,
    badge: "Buy & Rent Marketplace",
    badgeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',
    title1: "Buy What You Love",
    title2: "Rent What You Need",
    description: "Explore premium laptops, cameras, and gear...",
    imgeUrl:
      "https://images.unsplash.com/flagged/photo-1555584224-177ab88992f7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    btnText1: "Explore Marketplace",
    btnText2: "How It Works",
    actionLink: "./Products.html",
  },
  {
    id: 2,
    badge: "Smart Savings",
    badgeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    title1: "Why Buy When",
    title2: "You Can Rent?",
    description:
      "Save up to 80% on expensive tech, musical instruments, and vehicles. Use it when you need it.",
    imgeUrl:
      "https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    btnText1: "Start Renting",
    btnText2: "View Pricing",
    actionLink: "./Products.html?type=rent",
  },
  {
    id: 3,
    badge: "Trusted Platform",
    badgeIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title1: "Local Gear",
    title2: "Zero Hassle",
    description:
      "Secure deposits, verified community vendors, and fast local delivery right at your doorstep.",
    imgeUrl:
      "https://images.unsplash.com/photo-1540597184710-1b1c36894e46?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    btnText1: "Browse Local Gear",
    btnText2: "Become a Partner",
    actionLink: "./Products.html",
  },
];

let mySpecificCategory = [
  "laptops",
  "mens-shirts",
  "home-decoration",
  "groceries",
  "kitchen-accessories",
  "skin-care",
  "sports-accessories",
  "mens-watches",
];

let index = 0;

const laodProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();

    bannerProduct = data.products;

    shopByCategory(bannerProduct);
  } catch (error) {
    console.error(error);
  }
};

//Logic for render banner
function banner(product) {
  bannersDiv.innerHTML = `
      <div class="banner-products" >
        <div class="banner-section" >
            <span class="badge" >
              ${product.badgeIcon}
               ${product.badge}
            </span>
            <span class="title" >
              <span class="title1" >${product.title1}</span>
              <span class="title2" >${product.title2}</span>
            </span>
            <span class="subtitle" >
              ${product.description}
            </span>
            <div class="banner-buttons" >
            <a href="${product.actionLink}" class="banner-action-btn">
            <button class="banner-button" >
              ${product.btnText1} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button> 
            </a>
            <button class="banner-button banner-button2" >
              ${product.btnText2} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button> 
            </div>
        </div>
        <div class="banner-section2" >
          <img src=${product.imgeUrl} alt="">
        </div>
      </div>`;
}

// Logic for swipe banner
function bannerSwipe() {
  bannerDots.forEach((dots, index) => {
    dots.addEventListener("click", (e) => {
      clearInterval(slideTimer);

      currentIndex = index;
      banner(bannersProducts[currentIndex]);

      bannerDots.forEach((dot) => {
        dot.classList.remove("active");
      });
      if (e.target == dots) {
        dots.classList.add("active");
      }

      startAutoSlide();
    });
  });
}

// Logic for auto slide banner
function startAutoSlide() {
  slideTimer = setInterval(() => {
    // Logic for update banner
    currentIndex++;
    if (currentIndex >= bannersProducts.length) {
      currentIndex = 0;
    }

    //Logic for update banner dots automatically
    bannerDots.forEach((dot) => {
      dot.classList.remove("active");
    });

    bannerDots[currentIndex].classList.add("active");

    banner(bannersProducts[currentIndex]);
  }, 3000);
}

bannerSwipe();
banner(bannersProducts[currentIndex]);
laodProducts();

const shopByCategory = (bannerProduct) => {
  const eightItems = bannerProduct.filter((p) =>
    mySpecificCategory.includes(p.category),
  );
  // console.log(eightItems);
  let myfinalEightProducts = mySpecificCategory.forEach((val) => {
    let matchedProduct = bannerProduct.find((p) => p.category === val);
    finalProducts.push(matchedProduct);
  });

  finalProducts.forEach((product) => {
    let cleanName = product.category.replace("-", " ").toUpperCase();
    categoryItems.innerHTML += `
        <a href='categories.html?category=${product.category}'>
        <div class="category" data-category=${product.category}>
          <div class="img-container" >
            <img src="${product.thumbnail}" alt="">
            </div>
            <h5>${cleanName}</h5>
            <p>(${product.category.length - 1})+ Items</p>
      </div></a>
   `;
  });
};

// Logic for our products section
let saleProducts = productsData.filter(
  (items) => items.isForSale === true && items.isForRent === false,
);
let rentalProducts = productsData.filter((items) => items.isForRent === true);

function ourSellingProducts(saleProducts) {
  let filteredProducts = [];
  sallingProducts.forEach((product) => {
    let finalSaleProducts = saleProducts.find((p) => p.category == product);
    filteredProducts.push(finalSaleProducts);
  });

  filteredProducts.forEach((product) => {
    ourProductCards.innerHTML += `<div class="cards">
          <div class="cards-img">
            <img src=${product.thumbnail} alt="">
            <div class="card-icons" >
              <span>25% OFF</span>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              </button>
            </div>
          </div>
          <div class="product-details" >
            <div class="cards-btn" >
              <h3>${product.title}</h3>
              <span>₹ ${product.salePrice}</span>
              <p>Rating ${product.rating}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg></p>
              </div>
              <button>Buy Now</button>
          </div>
        </div>`;
  });
}

function ourRentalProducts(rentalProducts) {
  let filteredRentalProducts = [];

  sallingProducts.forEach((product) => {
    let finalRentalProducts = rentalProducts.find((p) => p.category == product);
    if (finalRentalProducts !== undefined) {
      filteredRentalProducts.push(finalRentalProducts);
    }
  });

  
  filteredRentalProducts.forEach((product) => {
    rentalProductCards.innerHTML += `<div class="cards rental-cards">
          <div class="cards-img rental-img">
            <img src=${product.thumbnail} alt="">
            <div class="card-icons rental-icons" >
              <span>25% OFF</span>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
              </button>
            </div>
          </div>
          <div class="product-details rental-product-detals" >
            <div class="cards-btn rental-card-btn" >
              <h3>${product.title}</h3>
              <span>₹ ${product.rentPrice} ${product.rentDuration}</span>
              <span>${product.rating}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
              </span>
            </div>
              <button>Buy Now</button>
          </div>
        </div>`;
  });
}

ourSellingProducts(saleProducts);
ourRentalProducts(rentalProducts);

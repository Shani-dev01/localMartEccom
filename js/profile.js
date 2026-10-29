const profileLinks = document.querySelectorAll(".profile-link span");
const profileContainer = document.querySelector(".profile-main-section");
const ordersContainer = document.querySelector(".orders-main-section");
const rentalsContainer = document.querySelector(".active-rentals-section");
const wishlistContainer = document.querySelector(".wishlist-section");
const orderLinks = document.querySelectorAll(".orders-links ul li");
const orderCards = document.querySelector(".order-cards");
const allCards = document.querySelectorAll(".order-card");
const form = document.querySelector("#editProfileForm");
const addressForm = document.querySelector(".address-form");
const closeForm = document.querySelector("#closeProfileForm");
const closeFormBtn = document.querySelector("#closeAddressForm");
const editBtn = document.querySelector(".edit-profile-btn");
const editAddressBtn = document.querySelector(".edit-address-btn");
const profileInputs = document.querySelectorAll(
  "#editProfileForm input"
);
const saveBtn = document.querySelector(".save-profile-btn");
const profileInputName = document.querySelector(".fullName");
const profileInputEmail = document.querySelector(".email");
const profileInputPhone = document.querySelector(".phoneNumber");
const profileIcon = document.querySelector(".profile-icon");
const profileIcon2 = document.querySelector(".profile-icon2");
const profileUserName = document.querySelector(".profile-username");
const profileName = document.querySelector(".username");
const profileUserEmail = document.querySelector(".profile-user-email");
const profileEmail = document.querySelector(".user-email");
const logoutBtn = document.querySelector(".logout-svg-title");
const contactEmail = document.querySelector(".logout-svg-title");




// Logic for handle side profile links

profileLinks.forEach((span) => {
  
  span.addEventListener("click", (e) => {
    hideContainers();
    e.preventDefault();
    profileLinks.forEach((link) => {
      link.classList.remove("first-link");
    });
    let text = e.target.textContent.trim(" ");

    if (text === "My Profile") {
      profileContainer.classList.remove('hidden');
    } else if (text === "My Order") {
      ordersContainer.classList.remove('hidden');
    } else if (text === "My Active Rentals") {
      rentalsContainer.classList.remove('hidden');
    } else if (text === "My Wishlist") {

      wishlistContainer.classList.remove('hidden');
    }
    e.target.classList.add("first-link");
  });
});


// Logic for handle order status links

const hideContainers = () => {
  profileContainer.classList.add('hidden')
  ordersContainer.classList.add('hidden')
  rentalsContainer.classList.add('hidden')
  wishlistContainer.classList.add('hidden')
};

hideContainers();
profileContainer.classList.remove('hidden');

orderLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    orderLinks.forEach((activeLink) => {
      activeLink.classList.remove("active-underline");
    });
    let linkText = e.target.textContent.trim(" ");

    allCards.forEach((card) => {
      if (card.dataset.status === linkText.toLowerCase()) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
      if (linkText === "All") {
        card.classList.remove("hidden");
      }
    });

    link.classList.add("active-underline");
  });
});


// Logic for handle form
editBtn.style.cursor='pointer'
editBtn.addEventListener('click',()=>{
  form.hidden = false;
});




 let formData ={
  name:"",
  email:"",
  phoneNumber:""
}

closeProfileForm.addEventListener('click',()=>{
  form.hidden=true;
})

saveBtn.addEventListener('click',(e)=>{
 e.preventDefault() ;


profileInputs.forEach((input)=>{
if (input.id === 'editName') {
  formData.name = input.value;
}else if (input.id === 'editEmail') {
  formData.email = input.value;
}else if (input.id === 'editPhone') {
  formData.phoneNumber = input.value;
}
 
});

localStorage.setItem('savedData', JSON.stringify(formData));

});
let data = JSON.parse(localStorage.getItem('savedData'));
profileInputName.value=data.name;
profileInputEmail.value=data.email;
profileInputPhone.value=data.phoneNumber;
profileUserName.innerText=data.name;
profileName.innerText=data.name;
profileUserEmail.innerText=data.email;
profileEmail.innerText=data.email;
let icon = data.name.charAt(0)
profileIcon.innerText=icon;
profileIcon2.innerText=icon;
logoutBtn.addEventListener('click',()=>{
localStorage.setItem('isLoggedIn', false);
window.location.replace('./login.html')
})



editAddressBtn.style.cursor='pointer'
editAddressBtn.addEventListener('click',()=>{
  
  addressForm.hidden = false;
});

console.log(addressForm);


 let addressFormData ={
  name:"",
  email:"",
  phoneNumber:""
}

closeFormBtn.addEventListener('click',()=>{
  addressForm.hidden=true;
})

saveBtn.addEventListener('click',(e)=>{
 e.preventDefault() ;


profileInputs.forEach((input)=>{
if (input.id === 'editName') {
  formData.name = input.value;
}else if (input.id === 'editEmail') {
  formData.email = input.value;
}else if (input.id === 'editPhone') {
  formData.phoneNumber = input.value;
}
 
});

localStorage.setItem('savedData', JSON.stringify(addressFormData));

});



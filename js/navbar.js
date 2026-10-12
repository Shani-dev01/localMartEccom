fetch('./Navbar.html')
.then(response => response.text())
.then(data=>{
    document.querySelector('.navbar').innerHTML = data;


const hamburger = document.querySelector('.responsive-header');
const sideMenu = document.querySelector('.responsive-menu');
const menuOverlay = document.querySelector('.responsive-overlay');
const exitSideMenu = document.querySelector('.exit-side-menu');


// Side open logic
hamburger.addEventListener('click',()=>{
    menuOverlay.classList.add('animate');
    sideMenu.classList.add('animate');
})



// Side menu exit logic
exitSideMenu.addEventListener('click',()=>{
    menuOverlay.classList.remove('animate');
    sideMenu.classList.remove('animate');
})

})



// Logic for change banner using dots


    
fetch("./Navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".navbar").innerHTML = data;
    

    const hamburger = document.querySelector(".responsive-header");
    const sideMenu = document.querySelector(".responsive-menu");
    const menuOverlay = document.querySelector(".responsive-overlay");
    const exitSideMenu = document.querySelector(".exit-side-menu");
    const loginBtn = document.querySelector(".login-btn");
    const loginBtnText = document.querySelector(".login-text");
    const accountBtn = document.querySelector("#profileBtn");
    const userName = document.querySelector("#userNameShow");
    const dropDown = document.querySelector(".hidden");
    const userEmail = document.querySelector(".email-container");

    // Side open logic
    hamburger.addEventListener("click", () => {
      menuOverlay.classList.add("animate");
      sideMenu.classList.add("animate");
    });

    // Side menu exit logic
    exitSideMenu.addEventListener("click", () => {
      menuOverlay.classList.remove("animate");
      sideMenu.classList.remove("animate");
    });

    let loginData = localStorage.getItem("isLoggedIn");
    let sessionData = sessionStorage.getItem("isLoggedIn");

    if (loginData === "true" || sessionData === "true") {
      accountBtn.innerText = "My Account";
      loginBtnText.innerText = "Logout";
    } else {
      accountBtn.innerText = "Login";
      loginBtnText.innerText = "Login";
    }

    let localData = JSON.parse(localStorage.getItem("savedData"));
    let user = localData.name.split(" ")[0];
    
    
    
    if (loginData === 'true' || sessionData === 'true' ) {
        userName.innerText=`${user}`;
        userEmail.innerHTML=`${localData.email}`
    }

    loginBtn.addEventListener("mouseenter", () => {
      dropDown.classList.remove("hidden");
    });

    loginBtn.addEventListener("mouseleave", () => {
      dropDown.classList.add("hidden");
    });

    loginBtnText.addEventListener("click", () => {
      if (loginData === "true" || sessionData === "true") {
        localStorage.setItem("isLoggedIn", "false");
        sessionStorage.setItem("isLoggedIn", "false");
        window.location.replace("./login.html");
      } else {
        window.location.replace("./login.html");
      }
    });
  });

const menubtn = document.querySelector(".menu-btn");
const sidebarbtn = document.querySelector(".sidebar");
const xbtn = document.querySelector(".cart");

menubtn.addEventListener("click", function() {
    if (sidebarbtn.classList.contains("sidebar-active")) {
        sidebarbtn.classList.remove("sidebar-active");
        
    } else {
        sidebarbtn.classList.add("sidebar-active");
        
    }
});


xbtn.addEventListener("click", function() {
    sidebarbtn.classList.remove("sidebar-active");
})
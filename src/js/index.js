const menubtn = document.querySelector(".menu-btn");
const sidebarbtn = document.querySelector(".sidebar");
const xbtn = document.querySelector(".cart");

menubtn.addEventListener("click", function () {
  if (sidebarbtn.classList.contains("sidebar-active")) {
    sidebarbtn.classList.remove("sidebar-active");
  } else {
    sidebarbtn.classList.add("sidebar-active");
  }
});
xbtn.addEventListener("click", function () {
  sidebarbtn.classList.remove("sidebar-active");
});

const roomBtn = document.querySelectorAll(".room-btn");

roomBtn.forEach((element) => {
  element.addEventListener("click", function () {
    const currentActiveBtn = document.querySelectorAll(
      ".room-btn.room-btn-active"
    );
    for (let i = 0; i < currentActiveBtn.length; i++) {
        currentActiveBtn[i].classList.remove("room-btn-active")
        
    }
    element.classList.add("room-btn-active");
    
   
   
  });
});

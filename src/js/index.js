const mob_Nav_Right = document.querySelector(".mob-nav-right");
const sidebar_Mobile = document.querySelector(".sidebar-mobile");
const close_Btn = document.querySelector(".close-btn");
if (mob_Nav_Right) {
  mob_Nav_Right.addEventListener("click", function () {
    sidebar_Mobile.classList.add("sidebar-mobile-active");
  });
}
if (close_Btn) {
  close_Btn.addEventListener("click", function () {
    if (sidebar_Mobile.classList.contains("sidebar-mobile-active")) {
      sidebar_Mobile.classList.remove("sidebar-mobile-active");
    }
  });
}
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
const btnAreas = document.querySelector(".btn-areas");
const roomBtns = document.querySelectorAll(".room-btn");
const tabContent = document.querySelectorAll(".tabcontent");
if (btnAreas) {
  btnAreas.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
      roomBtns.forEach((btn) => {
        btn.classList.remove("room-btn-active");
        console.log("hello");
      });
      e.target.classList.add("room-btn-active");
      console.log("added");

      tabContent.forEach((tabcontent) => {
        tabcontent.classList.remove("active-tab");
        console.log("removed");
      });
      const element = document.getElementById(id);
      element.classList.add("active-tab");
    }
  });
}
document.addEventListener("click", (e) => {
  const insideSideBar = sidebarbtn.contains(e.target);
  console.log(e.target);
  if (!e.target.classList.contains("menu-btn")) {
    if (!insideSideBar) {
      sidebarbtn.classList.remove("sidebar-active");
    }
  }
});

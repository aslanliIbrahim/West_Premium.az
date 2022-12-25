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

// const roomBtn = document.querySelectorAll(".room-btn");
// const tab = document.querySelectorAll(".tabcontent");

// roomBtn.forEach((element) => {
//   element.addEventListener("click", function () {
//     const currentActiveBtn = document.querySelectorAll(".room-btn.room-btn-active");
    
//     const currentActiveTab = document.querySelectorAll(".tabcontent.active-tab");
    
//     for (let i = 0; i < currentActiveBtn.length; i++) {
//         currentActiveBtn[i].classList.remove("room-btn-active");
//     }
//     element.classList.add("room-btn-active");
   
//   });
// });


const btnAreas = document.querySelector(".btn-areas");
const roomBtns = document.querySelectorAll(".room-btn");
const tabContent = document.querySelectorAll(".tabcontent");

if (btnAreas) {
    btnAreas.addEventListener("click", function(e) {
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
    })
}



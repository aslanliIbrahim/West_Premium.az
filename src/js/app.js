const gallery_btn_areas = document.querySelector(".gallery-btn-areas");
const gallery_room_btn = document.querySelectorAll(".gallery-room-btn");
const gallery_tab_content = document.querySelectorAll(".gallery-tab-content");

if (gallery_btn_areas) {
    gallery_btn_areas.addEventListener("click", function(e) {
        const id = e.target.dataset.id;

        console.log(id);
    })
}
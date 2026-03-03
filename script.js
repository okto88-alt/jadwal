document.querySelectorAll(".cafe-char").forEach(el=>{
    el.addEventListener("click", ()=>{
        openScheduleModal(el.dataset.id);
    });
});
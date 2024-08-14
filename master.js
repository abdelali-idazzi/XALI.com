//menu slide and transition
function menu() {
    const menu = document.querySelector(".menu ");
    menu.classList.toggle('menuTransition');
    const markRotate = document.querySelector(".mark");
    markRotate.classList.toggle('markRotate'); 
    const line2Width = document.querySelector(".line2");
    line2Width.classList.toggle("line2Width");
}
//display overlay
const searchInput = document.querySelector(".search-contener")
const overlay = document.querySelector(".overlay")
searchInput.onfocus = function() {
    overlay.classList.add("overlayShow")
}
searchInput.onblur = function() {
    overlay.classList.remove("overlayShow")
}
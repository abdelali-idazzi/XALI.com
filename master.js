function menu() {
    const menu = document.querySelector(".menu ");
    menu.classList.toggle('menuTransition');
    const markRotate = document.querySelector(".mark");
    markRotate.classList.toggle('markRotate'); 
    const line2Width = document.querySelector(".line2");
    line2Width.classList.toggle("line2Width");
}
function search() {
    const overlay = document.querySelector(".overlay");
        overlay.classList.toggle("overlayShow")
    const list = document.querySelector(".suggested")
}
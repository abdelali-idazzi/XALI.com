   //menu slide and transition
function menu() {
    const menu = document.querySelector(".menu ");
    menu.classList.toggle('menuTransition');
    const markRotate = document.querySelector(".mark");
    markRotate.classList.toggle('markRotate'); 
    const line2Width = document.querySelector(".line2");
    line2Width.classList.toggle("line2Width");
}
const overlay = document.querySelector(".overlay")
let input = document.querySelector(".searchBox");
const div = document.querySelector(".list");
let autoComplate = [
    "abdali",
    "C++",

    "smail",
    "java script",
    "HTML",
    "CSS",
    "how to make a website",
    "how to fix your PC",
    "lamar",
    "bangladish",

];
    //display overlay
input.onblur = function() {
    overlay.classList.remove("overlayShow")
}
input.onfocus = function() {
    overlay.classList.add("overlayShow")
}

    //autocomplate list 
input.onkeyup = function() {
    let result = [];
    let inputValue = input.value;
    if (inputValue.length) {
        result = autoComplate.filter((keyword) => {
            return keyword.toLowerCase().includes(inputValue.toLowerCase());
        });
    }
    display(result);
}
function display(result) {
    let content = result.map((list) => {
        return `<li onclick="displayOnInput(this)">${list}</li>`;
    });
    div.innerHTML = "<ul>"+content.join("")+"</ul>"
}
function displayOnInput(list) {
    input.value = list.innerHTML
}
const searchButton = document.querySelector(".searchButton");
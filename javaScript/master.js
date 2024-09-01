//menu slide and transition
const line2Width = document.querySelector(".line2");
function menu() {
    const menu = document.querySelector(".menu ");
    menu.classList.toggle('menuTransition');
    line2Width.classList.toggle("line2Width");
}
// colors transition
const colorsButton = document.querySelector(".colorsButton")
colorsButton.addEventListener('click', () => {
    container.classList.toggle("transition")
    container.addEventListener('mouseleave', () => {
        container.classList.remove("transition")
    })
    document.addEventListener('blur', () => {
        container.classList.remove("transition")
    })
});

//autocomplate list 
const overlay = document.querySelector(".overlay")
let input = document.querySelector(".searchBox");
const div = document.querySelector(".list");
let autoComplate = [
    "abdali",
    "C++",
    "aside tag",
    "nav tag",
    "section tag",
    "polo",
    "cv",
    "alise",
    "account",
    "application",
    "azar",
    "azerty",
    "samsung",
    "apple",
    "windows",
    "MAC",
    "instagram",
    "youtube",
    "facebook",
    "snapchat",
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
    const list = document.querySelector(".list")
input.onblur = function() {
    overlay.classList.remove("overlayShow")
}
input.onfocus = function() {
    overlay.classList.add("overlayShow")
    list.style.visibility = "visible"
}
overlay.onclick = function() {
        list.style.visibility = "hidden"
}

    //searchButton link
const searchButton = document.querySelector(".searchButton");
let searchLink = document.createElement("a");
searchLink.className = "searchLink";

input.onkeyup = function() {
    let result = [];
    let inputValue = input.value;
    if (inputValue.length) {
        result = autoComplate.filter((keyword) => {
            return keyword.toLowerCase().startsWith(inputValue.toLowerCase());
        });
    }
    //put alink inside button
    searchButton.prepend(searchLink);
    searchLink.setAttribute("href", `#${input.value.toLowerCase()}`);
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
    searchLink.setAttribute("href", `#${input.value.toLowerCase()}`);
}

searchButton.onclick = function () {
    list.style.visibility = "hidden"
}

// window.localStorage.clear()
const container = document.querySelector(".container");
const main = document.querySelector(".main");
const colors = document.querySelectorAll(".color");
const spanLogo = document.querySelector(".spanLogo");


main.style.background = window.localStorage.getItem("backgroundColor");
spanLogo.style.color = window.localStorage.getItem("color");
searchButton.style.background = window.localStorage.getItem("color");
colorsButton.style.background = window.localStorage.getItem("backgroundColor");

colors.forEach((color) => {
    color.addEventListener('click', (even) => {
        colors.forEach((color) => {
        color.classList.remove("active")
        })
        color.classList.add("active")
        window.localStorage.setItem("backgroundColor", even.currentTarget.dataset.backgroundcolor);
        window.localStorage.setItem("color", even.currentTarget.dataset.color);
        main.style.background =  even.currentTarget.dataset.backgroundcolor;
        spanLogo.style.color = even.currentTarget.dataset.color;
        searchButton.style.background = even.currentTarget.dataset.color;
        colorsButton.style.background = even.currentTarget.dataset.backgroundcolor;
    })
})

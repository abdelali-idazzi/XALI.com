
const main = document.querySelector(".main")
main.style.background = window.localStorage.getItem("backgroundColor")
const form = document.getElementById('form')
const username = document.querySelector(".username")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const submitBtn = document.querySelector(".submit")


    username.addEventListener('keyup', function () {
        if (username.value.match(/\w/)) {
            username.style.border = "solid 3px #68ff68"
    } else {
        username.style.border = " solid 3px #fc3434"
        }
    })
    email.addEventListener('keyup', function () {
        if (email.value.match(/^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/)) {
            email.style.border = "solid 3px #68ff68"
        } else  {
            email.style.border = " solid 3px #fc3434"
        }
    })
    password.addEventListener('keyup', function () {
        if (password.value.match(/\w/)) {
            password.style.border = "solid 3px #68ff68"
    } else {
        password.style.border = " solid 3px #fc3434"
        }
    })

    form.addEventListener('submit', (e) => {
        if(username.value.match(/\w/) && password.value.match(/\w/) && email.value.match(/^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/)) {
            
        }
        else {
            e.preventDefault()
        }
    })




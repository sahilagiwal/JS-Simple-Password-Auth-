const id = document.querySelector("#tochange")
const pass = document.querySelector(".pass")
const btn = document.querySelector(".btn")

btn.setAttribute("disabled", "true")

function chnage() {

    if (pass.value.length < 6) {
        btn.setAttribute("disabled", "true")
        id.setAttribute("class", "alert alert-danger")
        id.innerHTML = "The password should have atleast 5 char"
    } else {
        btn.removeAttribute("disabled", "")

    }
}
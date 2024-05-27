window.addEventListener("DOMContentLoaded", function() {
    const dateContainer = document.querySelector("#date");
    const date = new Date().getFullYear();

    dateContainer.textContent = date;
})



const btn = document.querySelector("#toggleNav");
const navbar = document.querySelector("#navBar");

btn.addEventListener("click", function() {
    navbar.classList.toggle("max-h-[20rem]");
});
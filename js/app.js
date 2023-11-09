//? JS
const hamburgerBtn = document.querySelector(".fa-bars")

hamburgerBtn.addEventListener("click",()=> {
    const headerLinks = document.querySelector(".header_links")
    headerLinks.classList.toggle("show")
})
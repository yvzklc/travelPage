//? JS
const hamburgetBtn = document.querySelector(".fa-bars")

hamburgetBtn.addEventListener("click",()=> {
    const headerLinks = document.querySelector(".header_links")
    headerLinks.classList.toggle("show")
})
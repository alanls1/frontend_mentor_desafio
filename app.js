const menuHamburguer = document.getElementById("menu-hamburguer-img")
const menuList = document.getElementById("menu-list")


menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("active")
    menuList.classList.toggle("selected")
})

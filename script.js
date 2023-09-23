const openNav = document.getElementById("openNav")
const closeNav = document.getElementById("closeNav")
const navBar = document.querySelector("#navBar li")

let viewNav = () => {
  navBar.style.display = "block"
  openNav.style.display = "none"
  closeNav.style.display = "flex"
}

let hideNav = () => {
  navBar.style.display = "none"
  openNav.style.display = "flex"
  closeNav.style.display = "none"
}

closeNav.addEventListener("click", function () {
  hideNav()
})
openNav.addEventListener("click", function () {
  viewNav()
})

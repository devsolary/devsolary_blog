const openNav = document.getElementById("openNav")
const closeNav = document.getElementById("closeNav")
const navBar = document.getElementsByClassName("listNav0")

let viewNav = () => {
  navBar.style.display = "block"
  openNav.style.display = "none"
  closeNav.style.display = "flex"
};

let hideNav = () => {
  navBar.style.display = "none"
  openNav.style.display = "flex"
  closeNav.style.display = "none"
}
let checkOrientation = () => {
  if(window.innerWidth > 720){
    navBar.style.display = "none"
  }
}

window.addEventListener('orientationchange', checkOrientation)

closeNav.addEventListener("click", function () {
  hideNav()
});
openNav.addEventListener("click", function () {
  viewNav()
});

const resizeScreen = () => {
  const currentWidth = window.innerWidth

  if(currentWidth !== screenWidth){
    location.reload();
  }
 };

window.addEventListener("resize", resizeScreen);
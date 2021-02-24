
document.getElementById("Set").addEventListener("click", openDiv);
function openDiv() {
  document.querySelector(".SetBanner").style.display = "flex";
  document.querySelector(".SetBanner").style.opacity = "100%";
  document.querySelector(".SetBanner").style.left = "50%";
}

document.getElementById("SetClose").addEventListener("click", CloseDiv);
function CloseDiv() {
  document.querySelector(".SetBanner").style.left = "200%";

}

document.querySelector(".SinglePlayer").addEventListener("click", closeHome);
function closeHome() {
  document.querySelector(".Anim").style.top = "200%";
  document.querySelector(".HomeBanner").style.display = "none";
  document.querySelector(".gameSpace").style.display = "block";

}




document.getElementById("Set").addEventListener("click", openDiv);
function openDiv() {
  document.querySelector(".SetBanner").style.display = "block";
}

document.getElementById("SetClose").addEventListener("click", CloseDiv);
function CloseDiv() {
  document.querySelector(".SetBanner").style.display = "none";
}


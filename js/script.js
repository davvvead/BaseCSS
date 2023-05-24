// Alert
const alertBtn = document.getElementById("alert-btn");
const btt = document.getElementsByClassName("btt");
const alertBox = document.querySelector(".alert");
const copyBtn = document.getElementById("copy");
const cdn = document.getElementById("cdn");
const cdnTip = document.getElementById("cdn-tip");
alertBtn.addEventListener("click", alertTrigger);

function alertTrigger() {
  alertBox.classList.remove("hide");
}

// Mobile Toggle
const mobile = document.querySelector(".fa-bars");
const closeMobileNav = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

// Listening for a click on the mobile toggle
mobile.onclick = function toggleMoblie() {
  if ((mobileNav.style.display = "none")) {
    mobileNav.style.display = "block";
  }
};

// Listening for a click on the mobile nav close button
closeMobileNav.onclick = function closeMoblie() {
  if (mobileNav.style.display != "none") {
    mobileNav.style.display = "none";
  }
};

// Listening for click of copy Button
copyBtn.addEventListener("click", triggerCopyCdn);

function triggerCopyCdn() {
  cdn.innerText;
  navigator.clipboard.writeText(cdn.innerText);
  cdnTip.style.display = "block";
  setTimeout(function () {
    cdnTip.style.display = "none";
  }, 1000);
}

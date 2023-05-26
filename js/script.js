// Alert
const alertBtn = document.getElementById("alert-btn");
const btt = document.getElementsByClassName("btt");
const alertBox = document.querySelector(".alert");
let copyBtn = document.querySelectorAll(".fa-clipboard");
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
console.log(copyBtn);

copyBtn.forEach(triggerEvent);

function triggerEvent(item) {
  item.addEventListener("click", triggerPrompt);
}

function triggerPrompt(e) {
  const obj = e.target;
  const clipText = obj.parentNode.nextElementSibling.innerText;
  const prev = obj.previousElementSibling;
  navigator.clipboard.writeText(clipText);
  prev.style.display = "block";
  setTimeout(function () {
    prev.style.display = "none";
  }, 1000);
}

const check = document.querySelector("#check-box");
const menu = document.querySelector(".menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector("ul");
const home = document.querySelector("ul li.home");
const categories = document.querySelector("ul li.categories");
const portfolio = document.querySelector("ul li.portfolio");
const contact = document.querySelector("ul li.contact-us");
const electro = document.querySelector(".electronics");

menu.addEventListener("click", () => {
  if (check.hasAttribute("checked")) {
    check.removeAttribute("checked");
    nav.style.display = "flex";
    open.style.display = "none";
    close.style.display = "block";
  } else {
    check.setAttribute("checked", "");
    nav.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
  }
});

nav.addEventListener("click", (e) => {
  if (e.target == home) {
    window.location = "../../home.html";
  } else if (e.target == categories) {
    window.location = "../../categories.html";
  } else if (e.target == portfolio) {
    window.location = "../../portfolio.html";
  } else if (e.target == contact) {
    window.location = "../../contact.html";
  }
});

electro.addEventListener("click", () => {
  window.location = "../../electronics.html";
});

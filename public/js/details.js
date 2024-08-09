const check = document.querySelector("#check-box");
const menu = document.querySelector(".menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector("ul");
const home = document.querySelector("ul li.home");
const categories = document.querySelector("ul li.categories");
const portfolio = document.querySelector("ul li.portfolio");
const contact = document.querySelector("ul li.contact-us");
const back = document.querySelector(".topic svg");

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
    window.location = "../../src/home.html";
  } else if (e.target == categories) {
    window.location = "../../src/categories.html";
  } else if (e.target == portfolio) {
    window.location = "../../src/portfolio.html";
  } else if (e.target == contact) {
    window.location = "../../src/contact.html";
  }
});

back.addEventListener("click", () => {
  history.back();
});

const check = document.querySelector("#check-box");
const menu = document.querySelector(".menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector("ul");

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

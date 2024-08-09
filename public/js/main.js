const container = document.querySelector(".container");
const button = document.querySelector(".button");
const loginBox = document.querySelector(".boxes");
const loginForm = document.querySelector(".login");
const loginInputs = document.querySelector(".login .inputs");
const signUpForm = document.querySelector(".sign-up");
const signUpInputs = document.querySelector(".sign-up .inputs");

// let arr = [];

// if (localStorage.getItem("notes")) {
//   arr = JSON.parse(localStorage.getItem("notes"));
// }

container.addEventListener("click", (e) => {
  if (e.target == button) {
    loginBox.style.display = "flex";
    container.style.filter = "blur(2px)";
    container.style.cursor = "pointer";
  } else {
    loginBox.style.display = "none";
    container.style.filter = "blur(0)";
    container.style.cursor = "default";
  }
});

// let num = 0;
loginForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    if (
      loginInputs.children[0].children[1].value != "" &&
      loginInputs.children[1].children[1].value != ""
    ) {
      window.location = "../../home.html";
      /*
      num++;
      addToArray(
        num,
        loginInputs.children[0].children[1],
        loginInputs.children[1].children[1]
      );
      */
    }
  }
});

signUpForm.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    if (
      signUpInputs.children[0].children[1].value != "" &&
      signUpInputs.children[1].children[1].value != "" &&
      signUpInputs.children[2].children[1].value != "" &&
      signUpInputs.children[3].children[1].value != ""
    ) {
      window.location = "../../home.html";
      /*
      num++;
      addToArray(
        num,
        loginInputs.children[0].children[1],
        loginInputs.children[1].children[1]
      );
      */
    }
  }
});

/*
function addToArray(id, email, password) {
  let obj = {
    id: id,
    email: email.value,
    password: password.value,
  };
  arr.unshift(obj);
  addToLocalStorage(arr);
}

function addToLocalStorage(arr) {
  localStorage.setItem("login", JSON.stringify(arr));
}
*/

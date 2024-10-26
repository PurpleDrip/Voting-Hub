let checked = false;

let isChecked = document.querySelector("#agreeCheckbox");
let voteBtn = document.querySelector(".vote-btn");

isChecked.addEventListener("click", () => {
    checked = isChecked.checked;
});

voteBtn.addEventListener("click", () => {
    if (checked) {
        console.log("hi");
        window.location.href = "/html/login_register.html";
    } else {
        alert("Please check the box first!");
    }
});
function preventBack() {
    window.history.forward();
  }
  setTimeout(preventBack, 0);
  window.onunload=function(){
    null
  };
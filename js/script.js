const button = document.querySelector(".got-this");
const modal = document.querySelector(".modal");
const modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  /* modal.classList.add("show-modal");
  button.innerText = "You’ve got this"; */
  openModal();
});

modalX.addEventListener("click", function () {
  /*  modal.classList.remove("show-modal");
  button.innerText = "Who’s got this?"; */
  closeModal();
});

// Create a Keydown Event Listener to close modal with the escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    //console.log("this is the key");
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
  closeModal();
});

/* Refactored code */
const closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

const openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

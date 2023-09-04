let modalWrapper = document.querySelector(".user_modal");
let modalBox = document.querySelector(".modal_box");
let modalCancelBtnX = document.querySelector(".cancel");
let userLogIn = document.querySelector(".user_account");

let openModal = () => {
  modalWrapper.style.display = "block";
  modalBox.style.display = "flex";
};

let closeModal = () => {
  modalWrapper.style.display = "none";
  modalBox.style.display = "none";
};

booleanForWrapper = true;

userLogIn.addEventListener("click", openModal);

modalWrapper.addEventListener("click", closeModal);

modalCancelBtnX.addEventListener("click", closeModal);

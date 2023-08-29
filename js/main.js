let showModal = (ev) => {
  ev.preventDefault();
  let modal = document.querySelector(".modal_box");
  modal.classList.remove("off");
  modal.classList.add("on");
};

let showOverLay = (ev) => {
  ev.preventDefault();
  let overlay = document.querySelector(".user_modal");
  overlay.classList.remove("hide");
  overlay.classList.add("show");

  showModal(ev);
};

let hideModal = (ev) => {
  ev.preventDefault();
  let modal = document.querySelector(".modal_box");
  modal.classList.remove("on");
  modal.classList.add("off");
};

let hideOverlay = (ev) => {
  ev.preventDefault();
  ev.stopPropagation();
  let overlay = document.querySelector(".user_modal");
  overlay.classList.remove("show");
  overlay.classList.add("hide");

  hideModal(ev);
};

const init = (ev) => {
  document
    .querySelector(".user_account")
    .addEventListener("click", showOverLay);

  document.querySelector(".cancel").addEventListener("click", hideOverlay);
};

document.addEventListener("DOMContentLoaded", init);

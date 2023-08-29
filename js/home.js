let categryList = document.querySelector("#category_list");
let isClicked = true;
let geolocations = document.querySelector(".geolocations");
let disappear = function () {
  if (isClicked) {
    categryList.style.display = "flex";
    isClicked = false;
  } else {
    categryList.style.display = "none";
    isClicked = true;
  }
};

let first_location = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.195221682257!2d53.41480675409848!3d65.32679503044817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447233f804f39725%3A0x1caee92b3f0fcdd3!2sMagazin%20%22Pera%22%20Shchel&#39;yaiur!5e1!3m2!1suz!2s!4v1692970371216!5m2!1suz!2s" width="1208" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let second_location = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1343.8762237947726!2d53.19497465790817!3d65.29765947752014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447249e2718cd461%3A0x25c0f625da4e30ed!2sVertep%2C%20Komi%2C%20Rossiya%2C%20169473!5e1!3m2!1suz!2s!4v1692971023148!5m2!1suz!2s" width="1208" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let third_location = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1344.0343914665025!2d53.286168253869526!3d65.29455747224014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447235dd2ca590b3%3A0xc633232da326cfaf!2sKrasnobor%2C%20Komi%2C%20Rossiya%2C%20169473!5e1!3m2!1suz!2s!4v1692971139838!5m2!1suz!2s" width="1208" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let fourth_location = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.4842440755958!2d53.3539944238425!3d65.2762362685246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447235aa69816fb7%3A0x7202220934f2d943!2sDiiur%2C%20Komi%2C%20Rossiya%2C%20169471!5e1!3m2!1suz!2s!4v1692971236363!5m2!1suz!2s" width="1208" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let Btn1 = () => {
  geolocations.innerHTML = first_location;
};

let Btn2 = () => {
  geolocations.innerHTML = second_location;
};
let Btn3 = () => {
  geolocations.innerHTML = third_location;
};
let Btn4 = () => {
  geolocations.innerHTML = fourth_location;
};

let toCategories = function () {
  window.location = "./categories.html";
};

let toAllProducts = function () {
  window.location = "./products.html";
};

let showModal = document.querySelector("#user_modal");

console.log(showModal);

const categories = [
  { id: 1, name: "Fruit", image: "https://picsum.photos/200/300/?category0" },
  { id: 2, name: "Bakery", image: "https://picsum.photos/200/300/?category2" },
  {
    id: 3,
    name: "Vegetable",
    image: "https://picsum.photos/200/300/?category3",
  },
  { id: 4, name: "Dairy", image: "https://picsum.photos/200/300/?category5" },
  { id: 5, name: "Meat", image: "https://picsum.photos/200/300/?category6" },
  {
    id: 6,
    name: "Dessert",
    image: "https://picsum.photos/200/300/?category7",
  },
  {
    id: 7,
    name: "Fast food",
    image: "https://picsum.photos/200/300/?category12",
  },
  {
    id: 8,
    name: "Breakfast",
    image: "https://picsum.photos/200/300/?category23",
  },
  { id: 9, name: "Lunch", image: "https://picsum.photos/200/300/?category27" },
  {
    id: 10,
    name: "Dinner",
    image: "https://picsum.photos/200/300/?category31",
  },
];

let gridClasses = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

let categoriesBox = document.querySelector(".categories_grid");

let showCategories = categories.map((el) => {
  return `<div
  class="grid_items border"
  style="background: url(${el.image});
  background-repeat: no-repeat;
  background-size: cover;

  "
>
  <p class="grid_items_text">${el.name}</p>
</div>`;
});

let addClasses = showCategories;

categoriesBox.innerHTML = showCategories;

for (i in categories) {
  categoriesBox.children[i].classList.add(gridClasses[i]);
}

const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);


const product = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  },
];
// insertDateAndIcon();
// insertTextAndModifiedDate();

const selectTag = document.getElementById("product");
const populateSelect = () => {
product.forEach((item) => {
  const option = document.createElement("option");
  option.setAttribute("value", `${item.name}`);
  option.textContent = `${item.name.toUpperCase()}`;
  selectTag.appendChild(option);
});
}
populateSelect();

window.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById("product");
  const firstOption = selectElement.options[0];
  firstOption.disabled = true; // Disable the first option
  selectElement.focus(); // Focus the select element (default focus goes to first non-disabled option)
});


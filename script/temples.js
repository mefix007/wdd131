// Get DOM Elements
const currentYear = document.querySelector('#year');
const lastModification = document.querySelector('#demo');
// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('nav');
// const ul = document.querySelector("ul");
// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`

// Eevents Listener
// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');

// hamButton.addEventListener("click", () => {
//     ul.classList.toggle("open-ul");
//     hamButton.classList.toggle("open");
// })
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
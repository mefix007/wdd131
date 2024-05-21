// Get DOM Elements
const currentYear = document.querySelector('#year');
const lastModification = document.querySelector('#lastModification');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`

// Eevents Listener
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
})

// temple container
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Apia Samoa",
		location: "Apia, Samoa",
		dedicated: "1983, August  5",
		area: 18691,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
	  },
	  {
		templeName: "Accra Ghana",
		location: "Accra, Ghana",
		dedicated: "2004, January 11",
		area: 17500 ,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
	  },
	  {
		templeName: "Barranquilla Colombia",
		location: "Barranquilla Atlantico, Colombia",
		dedicated: "2018, December 9",
		area: 25349,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg"
	  },
	// Add more temple objects here...
  ];
  
  const container = document.querySelector("#cards");
  function displayTemplePix(aList) {
    document.querySelector("#cards").innerHTML = "";
    aList.forEach(element => {
      const imageContainer = document.createElement("section");
      imageContainer.classList.add("image-container");

      const titleTag = document.createElement("h1");
      const locationTag = document.createElement("p");
      const dedicatedTag = document.createElement("p");
      const areaTag = document.createElement("p");

      const templeName = `${element.templeName}`;
      const location = `<span>LOCATION: </span>${element.location}`;
      const dedicated = `<span>DEDICATED: </span>${element.dedicated}`;
      const area = `<span>SIZE: </span>${element.area}`;
      const alternate = `${element.alternate}`;
      const source = `${element.imageUrl}`;

      titleTag.innerHTML = templeName;
      locationTag.innerHTML = location;
      dedicatedTag.innerHTML = dedicated;
      areaTag.innerHTML = area;

      const imageTag = document.createElement("img");
      imageTag.setAttribute("src", source);
      imageTag.setAttribute("class", "images");
      imageTag.setAttribute("loading", "lazy");
      imageTag.setAttribute("width", "400");
      imageTag.setAttribute("height", "225");
      imageTag.setAttribute("alt", alternate);

      imageContainer.appendChild(titleTag);
      imageContainer.appendChild(locationTag);
      imageContainer.appendChild(dedicatedTag);
      imageContainer.appendChild(areaTag);
      imageContainer.appendChild(imageTag);

      container.append(imageContainer);
    });
}
displayTemplePix(temples);
const oldTemples = document.querySelector("#old");
oldTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
});
const largeTemples = document.querySelector("#large");
largeTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area > 90000));
});
const smallTemples = document.querySelector("#small");
smallTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area < 10000));
});
const newTemples = document.querySelector("#new");
newTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
});
const home = document.querySelector("#home");
home.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples);
});
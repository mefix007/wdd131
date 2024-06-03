const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);



// script.js

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Automatic slideshow
setInterval(function () {
    showSlides(slideIndex += 1);
}, 3000); // Change image every 3 seconds



// card section for all images
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const phones = [
    {
        Name: "Samsung Galaxy note10",
        Brand: "Samsung",
        Specification: "Samsung Galaxy Note 10 Plus, with its 256GB storage capacity and dual sim compatibility",
        Year: 2021,
        Screen: "6.8 inches",
        imageUrl: "image/samsung-galaxy-note-10.webp"
    },
    {
        Name: "Huawei P60 Pro",
        Brand: "Huawei",
        Specification: "200g, 8.3mm thickness, HarmonyOS 3.1, EMUI 13.1, 256GB/512GB storage",
        Year: 2023,
        Screen: "6.67 inches",
        imageUrl: "image/Huawei-P60-Pro.webp"
    },
    {
        Name: "Iphone 14",
        Brand: "Iphone",
        Specification: "172g, 7.8mm thickness, iOS 16, up to iOS 17.5.1, 128GB/256GB/512GB storage",
        Year: 2022,
        Screen: "6.1 inches",
        imageUrl: "image/iphone14.webp"
    },
    {
        Name: "Samsung Galaxy 21",
        Brand: "Samsung",
        Specification: "169g (Sub6), 171g (mmWave), 7.9mm thickness, Android 11, up to Android 14, One UI 6.1 128GB/256GB storage",
        Year: 2021,
        Screen: "6.2 inches",
        imageUrl: "image/samsung-galaxy21.webp"
    },
    {
        Name: "Iphone X",
        Brand: "Iphone",
        Specification: "174g, 7.7mm thickness, iOS 11.1.1, up to iOS 16.7.5, 64GB/256GB storage",
        Year: 2017,
        Screen: "5.8 inches",
        imageUrl: "image/iphone-x.webp"
    },
    {
        Name: "Samsung Galaxy A51",
        Brand: "Samsung",
        Specification: "172g, 7.9mm thickness, Android 10, up to Android 13, One UI 5, 64GB/128GB/256GB storage",
        Year: 2019,
        Screen: "6.5 inches",
        imageUrl: "image/samsung-galaxy-a51.webp"
    },
    {
        Name: "Iphone 15Pro",
        Brand: "Iphone",
        Specification: "187g, 8.3mm thickness, iOS 17, up to iOS 17.5.1, 128GB/256GB/1TB storage",
        Year: 2023,
        Screen: "6.1 inches",
        imageUrl: "image/iphone-15pro.webp"
    },
    {
        Name: "Samsung Ultra S24",
        Brand: "Samsung",
        Specification: "232g or 233g, 8.6mm thickness, Android 14, One UI 6.1.1, 256GB/512GB/1TB storage",
        Year: 2024,
        Screen: "6.8 inches",
        imageUrl: "image/samsung-ultra.webp"
    },
    {
        Name: "Iphone 15",
        Brand: "Iphone",
        Specification: "171g, 7.8mm thickness, iOS 17, up to iOS 17.5.1, 128GB/256GB/512GB storage",
        Year: 2023,
        Screen: "6.1 inches",
        imageUrl: "image/iphone-15.webp"
    },
    {
        Name: "Infinix Hot 10i",
        Brand: "Android",
        Specification: "9.6mm thickness, Android 11, XOS 7.5, 32GB/64GB/128GB storage",
        Year: 2021,
        Screen: "6.5 inches",
        imageUrl: "image/infinix-hot-10i.webp"
    },
    {
        Name: "Iphone 13",
        Brand: "Iphone",
        Specification: "174g, 7.7mm thickness, iOS 15, up to iOS 17.5.1, 128GB/256GB/512GB storage",
        Year: 2021,
        Screen: "6.1 inches",
        imageUrl: "image/iphone-13-color-lineup.webp"
    },
    {
        Name: "Infinix Note12i",
        Brand: "Android",
        Specification: "198g, 8.3mm thickness, Android 12, XOS 10.6, 128GB storage",
        Year: 2022,
        Screen: "6.8 inches",
        imageUrl: "image/infinix-note12i.webp"
    },
    {
        Name: "Samsung Galaxy Z Fold4",
        Brand: "Samsung",
        Specification: "263g, 6.3mm thickness, Android 12L, up to Android 14, One UI 6.1, 256GB/512GB/1TB storage",
        Year: 2022,
        Screen: "7.6 inches",
        imageUrl: "image/samsung-fold.webp"
    },
    {
        Name: "Infinix Note 40Pro",
        Brand: "Android",
        Specification: "190g or 196g, 8.1mm thickness, Android 14, XOS 14, 256GB storage",
        Year: 2022,
        Screen: "6.7 inches",
        imageUrl: "image/infinix-note-40-pro-4g.webp"
    },
    {
        Name: "Huawei P50",
        Brand: "Huawei",
        Specification: "181g, 7.9mm thickness, HarmonyOS 2.0, 128GB/256GB storage",
        Year: 2021,
        Screen: "6.5 inches",
        imageUrl: "image/huawei-p50.webp"
    },
    {
        Name: "Galaxy Z flip",
        Brand: "Samsung",
        Specification: "183g, 7.2mm thickness, Android 10, up to Android 12, One UI 4.1.1, 256GB storage",
        Year: 2020,
        Screen: "6.7 inches",
        imageUrl: "image/galaxy-Z-flip.webp"
    },
    {
        Name: "Infinix Zero 5g",
        Brand: "Android",
        Specification: "199g, 8.8mm thickness, Android 11, up to Android 12, XOS 10.6, 128GB storage",
        Year: 2022,
        Screen: "6.8 inches",
        imageUrl: "image/infinix_zero_5g.webp"
    },
    {
        Name: "Hauwei Mate P60 Pro",
        Brand: "Huawei",
        Specification: "200g, 8.3mm thickness, HarmonyOS 3.1, EMUI 13.1, 256GB/512GB storage",
        Year: 2023,
        Screen: "6.6 inches",
        imageUrl: "image/hauwei-mate-pro-60p.webp"
    },
    {
        Name: "IPhone 14ProMax",
        Brand: "Iphone",
        Specification: "240g, 7.9mm thickness, iOS 16, up to iOS 17.5.1, 128GB/256GB/1TB storage",
        Year: 2022,
        Screen: "6.7 inches",
        imageUrl: "image/AppleiPhone14ProMax.webp"
    },
    {
        Name: "Samsung Galaxy Z Flip",
        Brand: "Samsung",
        Specification: "183g, 7.2mm thickness, Android 10, up to Android 12, One UI 4.1.1, 256GB storage",
        Year: 2020,
        Screen: "6.7 inches",
        imageUrl: "image/galaxy-Z-flip.webp"
    },
    {
        Name: "Iphone 11",
        Brand: "Iphone",
        Specification: "194g, 8.3mm thickness, iOS 13, up to iOS 17.4, 64GB/128GB/256GB storage",
        Year: 2019,
        Screen: "6.1 inches",
        imageUrl: "image/apple-iphone-11.webp"
    }
    // Add more phone objects here if needed...
];

const container = document.querySelector("#cards");

function displayPhonePix(aList) {
    container.innerHTML = "";
    aList.forEach(element => {
        const imageContainer = document.createElement("section");
        imageContainer.classList.add("image-container");

        const NameTag = document.createElement("h1");
        const SpecificationTag = document.createElement("p");
        const YearTag = document.createElement("p");
        const ScreenTag = document.createElement("p");

        NameTag.innerHTML = element.Name;
        SpecificationTag.innerHTML = `<span>Specification: </span>${element.Specification}`;
        YearTag.innerHTML = `<span>Year: </span>${element.Year}`;
        ScreenTag.innerHTML = `<span>Screen: </span>${element.Screen}`;

        const imageTag = document.createElement("img");
        imageTag.setAttribute("src", element.imageUrl);
        imageTag.setAttribute("class", "images");
        imageTag.setAttribute("loading", "lazy");
        imageTag.setAttribute("width", "400");
        imageTag.setAttribute("height", "225");
        imageTag.setAttribute("alt", element.Name);

        imageContainer.appendChild(NameTag);
        imageContainer.appendChild(SpecificationTag);
        imageContainer.appendChild(YearTag);
        imageContainer.appendChild(ScreenTag);
        imageContainer.appendChild(imageTag);

        container.append(imageContainer);
    });
}

// Initial display of all phones
displayPhonePix(phones);

// Filter functions
const filterIphones = phones => phones.filter(phone => phone.Brand === "Iphone");
const filterSamsungs = phones => phones.filter(phone => phone.Brand === "Samsung");
const filterHuaweis = phones => phones.filter(phone => phone.Brand === "Huawei");
const filterAndroids = phones => phones.filter(phone => phone.Brand === "Android");

// Adding event listeners to the navigation buttons
document.querySelector("#Iphones").addEventListener('click', () => displayPhonePix(filterIphones(phones)));
document.querySelector("#Samsungs").addEventListener('click', () => displayPhonePix(filterSamsungs(phones)));
document.querySelector("#Huaweis").addEventListener('click', () => displayPhonePix(filterHuaweis(phones)));
document.querySelector("#Androids").addEventListener('click', () => displayPhonePix(filterAndroids(phones)));

// Event listener for home button to display all phones
document.querySelector("#Home").addEventListener('click', () => displayPhonePix(phones));



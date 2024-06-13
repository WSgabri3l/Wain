const image = document.querySelector("#closeup-image-expanded-src");
const title = document.querySelector("#title-placeholder");
const author = document.querySelector("#name-placeholder");
const initial = document.querySelector("#initial-placeholder");
const link = document.querySelector("#link-placeholder");

window.onload = () => {

    loadPage(image, title, author, initial, link);

};

function loadPage(image, title, author, initial, link) {

    image.src = sessionStorage.getItem("imagePath");
    title.textContent = sessionStorage.getItem("imageName");
    author.textContent = sessionStorage.getItem("author");
    initial.textContent = sessionStorage.getItem("initial");
    link.href = sessionStorage.getItem("link");
    
}
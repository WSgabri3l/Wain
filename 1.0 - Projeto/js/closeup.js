/* Campos HTML */

const image = document.querySelector("#closeup-image-expanded-src");
const title = document.querySelector("#title-placeholder");
const author = document.querySelector("#name-placeholder");
const initial = document.querySelector("#initial-placeholder");
const link = document.querySelector("#link-placeholder");

const contentCloseup = document.querySelector(".content-closeup");

/* Outras Variavies */

var page = 1;

window.onload = () => {

    loadPage(image, title, author, initial, link);

    searchImages(sessionStorage.getItem("imageName"), contentCloseup, page);

};

window.addEventListener("scroll", () =>{

    if (userReachedBottom()) {

        page = page + 1;

        searchImages(sessionStorage.getItem("imageName"), contentCloseup, page);
        
    }

});

function loadPage(image, title, author, initial, link) {

    image.src = sessionStorage.getItem("imagePath");
    title.textContent = sessionStorage.getItem("imageName");
    author.textContent = sessionStorage.getItem("author");
    initial.textContent = sessionStorage.getItem("initial");
    link.href = sessionStorage.getItem("link");
    
}
const contentField = document.querySelector(".content");

window.onload = () => {

    callApi()
};

/* Requisicao da API Pexels */

function callApi() {

    fetch("https://api.pexels.com/v1/curated?page=1&per_page=40", {

        headers: {
            Authorization: "jqDZqFprHkb1ogjEnn2znvwY51wjSULFfs3WltTeVLqIZIJoLNffspjF"
        }

    })

   .then(response => {
        return response.json()
   })

   .then(data => {
        return data.photos
    })

    .then(photos => {

        for (let index = 0; index < photos.length; index++) {

            let source = photos[index].src.original;

            let imgElement = document.createElement("img");
            imgElement.src = source;

            contentField.appendChild(imgElement);
            
        }
    })


};


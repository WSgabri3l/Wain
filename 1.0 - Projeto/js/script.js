/* Variaveis do HTML */

const contentField = document.querySelector(".content");

/* Variaveis de auxilio */


/* Requisicao da API Pexels e Carregar Imagens na Pagina Inicial*/

function callApi(page) {

    let requestLink = "https://api.pexels.com/v1/curated?page=" + page + "&per_page=40";

    //console.log(requestLink);

    fetch("https://api.pexels.com/v1/curated?page=" + page + "&per_page=30", {

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
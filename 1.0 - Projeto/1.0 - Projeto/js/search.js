/* Variaveis do HTML */

const queryField = document.querySelector("#pesquisar");

/* Variaveis de auxilio */

var query = "";

queryField.addEventListener("keypress", (event) =>{

    if (event.key === "Enter") {
        
        query = queryField.value;
        
        if (query === "") {

            return;

        } else {

            console.log(query);

            sessionStorage.setItem("query", query)

            window.location.replace("search.html")
        };

    };

});

function searchImages(query, field, page) {

    let requestLink = "https://api.pexels.com/v1/search??page=" + page + "&locale=pt-BR&per_page=30&query=" + query;

    console.log(requestLink);

    fetch("https://api.pexels.com/v1/search??page=" + page + "&locale=pt-BR&per_page=30&query=" + query, {

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

        field.appendChild(imgElement);
        
    }
   })
    
}
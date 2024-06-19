/* Variaveis do HTML */

const queryField = document.querySelector("#pesquisar");

/* Variaveis de auxilio */

var query = "";

queryField.addEventListener("keypress", (event) =>{

    if (event.key === "Enter") {

        console.log("Enter")
        
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

function searchBar(query, searchBar) {

    searchBar.textContent = query;
    
}

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

            /* URL da Imagem */
            let source = photos[index].src.original;

            /* Elementos Principais */
            let imgDiv = document.createElement("div");
            imgDiv.className = "image-main";

            let imgContent = document.createElement("div")
            imgContent.className = "image-content";

            let imgElement = document.createElement("img");
            imgElement.src = source;
            imgElement.id = "image-main-field-source";

            let imgModal = document.createElement("div");
            imgModal.className = "image-main-modal";

            /* Elementos Modal */

            let modalSaveDiv = document.createElement("div");
            modalSaveDiv.className = "modal-save-div";

            let modalSave = document.createElement("button");
            modalSave.id = "modal-save";
            modalSave.className = "modal-button";
            modalSave.textContent = "SALVAR";

            let modalOtherDiv = document.createElement("div");
            modalOtherDiv.className = "modal-other-div";

            let modalThreeDots = document.createElement("button");
            modalThreeDots.id = "modal-dots";
            modalThreeDots.className = "modal-button";

            /* Imagem dos 3 Pontos */
            let modalThreeDotsImg = document.createElement("img");
            modalThreeDotsImg.id = "modal-dots-image";
            modalThreeDotsImg.className = "modal-button";
            modalThreeDotsImg.src = "../img/buttons/dots-icon-closeup.png";

            modalThreeDots.appendChild(modalThreeDotsImg);

            let modalDownload = document.createElement("button");
            modalDownload.id = "modal-download";
            modalDownload.className = "modal-button";

            /* Imagem de Download */
            let modalDownloadImg = document.createElement("img");
            modalDownloadImg.id = "modal-download-image";
            modalDownloadImg.className = "modal-button";
            modalDownloadImg.src = "../img/buttons/download-icon-closeup.png";

            modalDownload.appendChild(modalDownloadImg);

            /* Evento de Abrir e Fechar Modal */

            imgDiv.addEventListener("mouseover", (event) =>{

                openModal(imgModal, modalLever);

            });

            imgDiv.addEventListener("mouseout", (event) =>{

                closeModal(imgModal, modalLever)

            });

            /* Evento de mudar de pagina e salvar informacoes no cache */

            imgDiv.addEventListener("click", (event) =>{

                if (!event.target.matches(".modal-button")) {
                    
                    saveInfo(source, photos[index].alt, photos[index].photographer, photos[index].photographer_url);

                    window.location.href = "closeup.html";
                        
                }

            });

            /* Isercao no Modal */

            modalSaveDiv.appendChild(modalSave);
            modalOtherDiv.appendChild(modalThreeDots);
            modalOtherDiv.appendChild(modalDownload);

            imgModal.appendChild(modalSave);
            imgModal.appendChild(modalOtherDiv);

            /* Isercao no HTML */
            
            imgContent.appendChild(imgElement);
            imgContent.appendChild(imgModal);

            imgDiv.appendChild(imgContent);

            field.appendChild(imgDiv);

        }
   })
    
}
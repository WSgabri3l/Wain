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

            let modalThreeDotsDiv = document.createElement("div");
            modalThreeDotsDiv.className = "modal-dots-div";

            let modalThreeDots = document.createElement("button");
            modalThreeDots.id = "modal-dots";
            modalThreeDots.className = "modal-button";

            /* ESPACO DEDICADO A MEXER NA CONFIG DOS DOTS */

            /* Estrutura */

            //Divs do Dropdown
            let dropdownDiv = document.createElement("div");
            dropdownDiv.className = "dropdown-dots-main"

            let dropdownDivContent = document.createElement("div");
            dropdownDivContent.className = "dropdown-dots-content";

            let dropdownDivItem_1 = document.createElement("div");
            dropdownDivItem_1.className = "dropdown-dots-item-div"

            let dropdownDivItem_2 = document.createElement("div");
            dropdownDivItem_2.className = "dropdown-dots-item-div";

            //Opcoes do Dropdown
            let dropdownItemDownload = document.createElement("a");
            dropdownItemDownload.className = "dropdown-dots-item";
            dropdownItemDownload.href = "#";
            dropdownItemDownload.textContent = "Baixar Imagem";

            let dropdownItemReport = document.createElement("a");
            dropdownItemReport.className = "dropdown-dots-item";
            dropdownItemReport.href = "#";
            dropdownItemReport.textContent = "Denunciar Imagem";

            //Appends
            dropdownDivItem_1.appendChild(dropdownItemDownload);
            dropdownDivItem_2.appendChild(dropdownItemReport);

            dropdownDivContent.appendChild(dropdownDivItem_1);
            dropdownDivContent.appendChild(dropdownDivItem_2);

            dropdownDiv.appendChild(dropdownDivContent);

            /* Evento de Abrir o Dropdown na Imgem clicada */
            modalThreeDots.addEventListener("click", (event) =>{

                /* Adicionar Classe para mostrar Dropdown */

                if (dropdownDivContent.classList.contains("dropdown-dots-show")) {

                    closeModal(dropdownDivContent, dotsDropdownLever);
                    
                } else {

                    openModal(dropdownDivContent, dotsDropdownLever);
                };

            });

            /* Imagem dos 3 Pontos */
            let modalThreeDotsImg = document.createElement("img");
            modalThreeDotsImg.id = "modal-dots-image";
            modalThreeDotsImg.className = "modal-button";
            modalThreeDotsImg.src = "../img/buttons/dots-icon-closeup.png";

            modalThreeDots.appendChild(modalThreeDotsImg);

            let modalDownloadDiv = document.createElement("div");
            modalDownloadDiv.className = "modal-download-div";

            let modalDownload = document.createElement("button");
            modalDownload.id = "modal-download";
            modalDownload.className = "modal-button";

            /* Evento para baixar Imagens */
            modalDownload.addEventListener("click", (event) =>{

                downloadImage(source);
                
            });

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

            modalThreeDotsDiv.appendChild(modalThreeDots);
            modalThreeDotsDiv.appendChild(dropdownDiv);
            modalDownloadDiv.appendChild(modalDownload);

            modalSaveDiv.appendChild(modalSave);
            modalOtherDiv.appendChild(modalThreeDotsDiv);
            modalOtherDiv.appendChild(modalDownloadDiv);

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
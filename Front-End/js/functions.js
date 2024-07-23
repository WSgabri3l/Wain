/* Funcoes Auxiliares do Site */

const modalLever = "image-main-modal-show";

const dotsDropdownDiv = document.querySelector(".dropdown-dots-content");
const dotsDropdownLever = "dropdown-dots-show";

/* Report */
const modalReport = document.querySelector(".modal-container");
const modalContainer = document.querySelector(".modal")
const modalDropdownLever = "modal-show";
const modalDownload = document.querySelector("#download-dropdown");

modalReport.addEventListener("click", (event) =>{

    if (modalContainer.contains(event.target)){

        return;

    } 
	
	closeModal(modalReport, modalDropdownLever);
});

modalDownload.addEventListener("click", (event) =>{

    downloadImage(sessionStorage.getItem("imagePath"));

});

//Funcao que identifica a posicao do Scroll da Pagina

function userReachedBottom() {

    //scrollY retorna a quantidade de Pixels que foi "scrollada" para cima ou para baixo.
    //innerHeight retrona a altura do que e visivel na pagina no atual momento.

    //A soma dos dois leva a quantidade de tudo que ja foi "scrollado".
    const scrollPosition = document.documentElement.scrollTop + document.documentElement.clientHeight;

    //offsetHeight retorna a altura total de um elemento, no caso sera o do elemento como todo.
    const documentHeight = document.documentElement.scrollHeight - 10;

    //E entao retornara um verdadeiro caso a area total scrolada for igual ou ultrapassar a area do documento.
    
    if (scrollPosition >= documentHeight) {
        
        return true

    }
}

/* Funcoes para abrir e fechar o Modal */

function openModal(div, lever) {

    div.classList.add(lever);

}

function closeModal(div, lever){

    div.classList.remove(lever);

}

/* Funcao que salva informacoes sobre a imagem no cache do site */

function saveInfo(imagePath, imageName, author, link) {

    sessionStorage.setItem("imagePath", imagePath);
    sessionStorage.setItem("imageName", imageName);
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("initial", author.slice(0, 1));
    sessionStorage.setItem("link", link);
}

/* Funcao que faz o download das imagens do site */

function downloadImage(url) {

    //Para baixar uma imagem primeiro e preciso usar "fetch" e o metodo "GET" e
    //assim adquirir o link
    fetch(url, {
        method: "GET", 
    })  
        //Em seguida .blob() torna os dados em arquivo bruto que nao e necessariamente
        //um objeto do JS
        .then(response => response.blob())

        .then(blob => {

        //Depois capturamos o link do novo arquivo
        let blobUrl = window.URL.createObjectURL(blob);

        //Criamos um link para o download
        let a = document.createElement('a');

        //Acrescentamos um nome, passamos o link para o elemento e adicionamos ao HTML
        a.download = "image-downloaded";
        a.href = blobUrl;
        document.body.appendChild(a);

        //Em seguida ja realizamos o evento de click e logo removemos o elemento para
        //evitar possiveis conflitos
        a.click();
        a.remove();

    })
}
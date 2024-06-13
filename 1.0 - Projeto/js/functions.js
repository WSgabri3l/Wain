/* Funcoes Auxiliares do Site */

//Funcao que identifica a posicao do Scroll da Pagina

const modalLever = "image-main-modal-show";

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
    
    console.log(sessionStorage.getItem("imagePath"));
    console.log(sessionStorage.getItem("imageName"));
    console.log(sessionStorage.getItem("author"));
    console.log(sessionStorage.getItem("initial"));
    console.log(sessionStorage.getItem("link"));
}
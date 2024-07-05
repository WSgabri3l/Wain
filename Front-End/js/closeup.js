/* Campos HTML */

const image = document.querySelector("#closeup-image-expanded-src");
const title = document.querySelector("#title-placeholder");
const author = document.querySelector("#name-placeholder");
const initial = document.querySelector("#initial-placeholder");
const link = document.querySelector("#link-placeholder");

/* Campos da Imagem */

const downloadButton = document.querySelector("#closeup-download");
const dotsButton = document.querySelector("#closeup-dots");

/* Campos de Comentarios */

const commentsNumber = document.querySelector("#commets-number");
const commentsField = document.querySelector(".closeup-comments-others-content");
const textareaDiv = document.querySelector(".comment-textarea");
const textareaInput = document.querySelector("#text-input");
const sendButton = document.querySelector("#button-send");

/* Div de Imagens */

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

textareaInput.addEventListener("keyup", (event) =>{

    expandTextArea(textareaInput, textareaDiv, event);

});

sendButton.addEventListener("click", (event) =>{

    if (textareaInput.value == "") {

        return

    } else {

        addComment(commentsField);
        countComment(commentsNumber);

    }
});

downloadButton.addEventListener("click", (event) =>{

    downloadImage(sessionStorage.getItem("imagePath"));

});

dotsButton.addEventListener("click", (event) =>{

    if (dotsDropdownDiv.classList.contains("dropdown-dots-show")) {

        closeModal(dotsDropdownDiv, dotsDropdownLever);

    } else {

        openModal(dotsDropdownDiv, dotsDropdownLever);

    }
});

/* Funcoes da Pagina */

//Carregar pagina
function loadPage(image, title, author, initial, link) {

    image.src = sessionStorage.getItem("imagePath");
    title.textContent = sessionStorage.getItem("imageName");
    author.textContent = sessionStorage.getItem("author");
    initial.textContent = sessionStorage.getItem("initial");
    link.href = sessionStorage.getItem("link");
    
}

//Expandir e Reduzir aba de comentarios
function expandTextArea(textarea, div, event) {

    textarea.style.height = "50px";
    div.style.height = "20px";

    let scrollHeight = event.target.scrollHeight;
    let newHeigth = scrollHeight + "px";
    
    // console.log(scrollHeight);

    textarea.style.height = newHeigth;
    div.style.height = newHeigth;

}

function sendComment(input){

    if (input.value == "") {
        
        return

    } else {

        let inputContent = input.value;
        sessionStorage.setItem("commentInput", inputContent);
    
        input.value = "";

        return inputContent

    }
}

//Adicionar novo comentario
function addComment(div) {

    //Divs
    let commentDiv = document.createElement("div");
    commentDiv.className = "commented";

    let commentDivIcon = document.createElement("div");
    commentDivIcon.className = "commented-icon";

    let commentDivText = document.createElement("div");
    commentDivText.className = "commented-text";

    //Button
    let buttonIcon = document.createElement("button")
    buttonIcon.id = "commented-icon-image";

    buttonIcon.textContent = "U";

    //p
    let pCommet = document.createElement("p");
    pCommet.id = "commeted-username";

    pCommet.textContent = "USERNAME"

    //Span Content
    let comment = sendComment(textareaInput);

    //Conteudo

    //Organizacao

    commentDivIcon.appendChild(buttonIcon);

    pCommet.innerHTML += `<span id="commented-comment"> ${comment}</span>`
    commentDivText.appendChild(pCommet);

    commentDiv.appendChild(commentDivIcon);
    commentDiv.appendChild(commentDivText);

    div.appendChild(commentDiv);
}

//Contador de Comentarios
function countComment(comment) {
    
    console.log(comment.textContent);

    let value = comment.textContent;
    value = parseInt(value);
    value = value + 1;

    comment.textContent = value;
}
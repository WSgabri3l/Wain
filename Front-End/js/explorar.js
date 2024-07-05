const imagem1 = document.querySelector(".div1");
const imagem2= document.querySelector(".div2");
const imagem3 = document.querySelector(".div3");
const imagem4 = document.querySelector(".div4");
const imagem5 = document.querySelector(".div5");
const imagem6 = document.querySelector(".div6");
const imagem7 = document.querySelector(".div7");

function guardarTema(imagem, query) {

    imagem.addEventListener("click", (event) =>{

        sessionStorage.setItem("query", query);
        window.location.replace("search.html");

    });
};

guardarTema(imagem1, "Cidades");
guardarTema(imagem2, "Praias");
guardarTema(imagem3, "Comida");
guardarTema(imagem4, "Esportes");
guardarTema(imagem5, "Criatividades");
guardarTema(imagem6, "Noites");
guardarTema(imagem7, "Moda");

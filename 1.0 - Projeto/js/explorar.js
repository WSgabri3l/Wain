const cidades = document.querySelector(".div1");
const praias = document.querySelector(".div2");
const comidas = document.querySelector(".div3");
const esporte = document.querySelector(".div4");
const criatividade = document.querySelector(".div5");
const noites = document.querySelector(".div6");
const moda = document.querySelector(".div7");
const container = document.querySelector(".container");

function searchImages(query, field, page = 1) {
    let requestLink = "https://api.pexels.com/v1/search?page=" + page + "&locale=pt-BR&per_page=30&query=" + query;
    console.log(requestLink);
    fetch(requestLink, {
        headers: {
            Authorization: "0CZoC0Tz263BctwhpJ40dhc1KT9sfz3U3ohQXERPdROjs694vfExUd4h"
        }
    })
    .then(response => response.json())
    .then(data => data.photos)
    .then(photos => {
        // Limpar o conteúdo anterior
        field.innerHTML = '';
        // Adicionar novas imagens
        photos.forEach(photo => {
            let imgElement = document.createElement("img");
            imgElement.src = photo.src.large; // Usar a URL da imagem grande
            field.appendChild(imgElement);
        });
    })
    .catch(error => console.error('Erro ao buscar fotos:', error));
}

cidades.addEventListener("click", () => searchImages('city', container));
praias.addEventListener("click", () => searchImages('beach', container));
comidas.addEventListener("click", () => searchImages('food', container));
esporte.addEventListener("click", () => searchImages('sport', container));
criatividade.addEventListener("click", () => searchImages('creativity', container));
noites.addEventListener("click", () => searchImages('night', container));
moda.addEventListener("click", () => searchImages('fashion', container));
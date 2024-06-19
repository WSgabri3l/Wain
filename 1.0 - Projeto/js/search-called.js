/* Variaveis do HTML */

var page = 1;

const contentSearchField = document.querySelector(".content-search");
var query = sessionStorage.getItem("query");

window.onload = () => {

    searchImages(query, contentSearchField, page);

    searchBar(queryField, query);

}

window.addEventListener("scroll", () =>{

    if (userReachedBottom()) {

        page = page + 1;

        searchImages(query, contentSearchField, page);
        
    }

});
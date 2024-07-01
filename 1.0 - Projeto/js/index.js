/* Local em que as funcoes sao chamadas ao carregar a pagina */

var page = 1;

window.onload = () => {

    callApi(page)

};

window.addEventListener("scroll", () =>{

    if (userReachedBottom()) {

        page = page + 1;

        callApi(page)
        
    }

});
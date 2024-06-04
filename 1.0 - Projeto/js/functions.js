/* Funcoes Auxiliares do Site */

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
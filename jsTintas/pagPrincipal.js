var imagen0101 = "C:/Users/uliss/OneDrive/Área de Trabalho/projeto-webtintas/img/artigorenova.jpg";
var imagen0102 = "C:/Users/uliss/OneDrive/Área de Trabalho/projeto-webtintas/img/coral_banner_teste_facil_1530x986_0.jpg";
var imagen0103 = "C:/Users/uliss/OneDrive/Área de Trabalho/projeto-webtintas/img/capa-artigo-coral-1530-x-986.jpg";
var img = document.getElementById("img01");
var aux = 0;
function setimgProximo(){
    if(aux === 0){
        img.setAttribute('src', imagen0102);
        aux++;
    }
    if(aux === 1){
        img.setAttribute('src', imagen0103);
        aux++;
    }
    if(aux > 2){
        img.setAttribute('src', imagen0101);
        aux = 0;
    }
}



function clickMenu(){
    if (menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    } else {
        menuItens.style.display = 'block'
    }


}

function mudouTamanho() {
    if (window.innerWidth >= 768){
        menuItens.style.display = 'block'
    } else {
        menuItens.style.display = 'none'
    }
}
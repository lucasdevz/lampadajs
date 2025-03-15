//dom

const lamapada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//eventos

btligar.addEventListener('click',ligar)
btdesligar.addEventListener('click',desligar)

//funções

function ligar(){
    lamapada.src = 'images/lampada-acesa.png'
}


function desligar(){
    lamapada.src = 'images/lampada-apagada.png'
}

alert('comiu o cu de quem tá lendo');
let nomeUsuario = "";
let texto = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual o tamanho da peça?');
}

texto.textContent = nomeUsuario;
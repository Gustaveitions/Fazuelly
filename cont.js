const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');





for (let x = 0; x<botoes.length; x++){
    botoes[x].onclick = function(){
        for(let y = 0; y<botoes.length; y++){
            botoes[y].classList.remove('ativo');
            textos[y].classList.remove('ativa');
        }
        botoes[x].classList.add('ativo');
        textos[x].classList.add('ativa');
    }

}
console.log(x)
}
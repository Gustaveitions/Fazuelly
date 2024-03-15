let numeroSecreto =  Math.floor (Math.random()*10);
console.log(numeroSecreto);
let chute = '';





while(chute == ''){
    chute =prompt('Você já traiu');
}

if(numeroSecreto==chute){
    alert('100% fiel')
    console.log('parabéns,acertou!');
} else{
    alert('Eu errei fui muluque');
    console.log('0% File, espero que seja tarido também');
}
const OPCOES = ['pedra', 'papel', 'tesoura']
let opcaoUsuario
let opcaoComputador
let resultado = ''
let pontosUsuario = 0
let pontosJarvas = 0
let escolhido = ''

function opcaoAleatoria() {
    let index = Math.floor(Math.random() * (4 - 1) + 1);
    return OPCOES[index]
}

let botoesOpcao = document.querySelectorAll('.btnControl') 

    botoesOpcao.forEach(function (item) {
        item.addEventListener("click", function (e) {
            if (pontosUsuario < 3 && pontosJarvas <3){
            escolhido = item.attributes.alt.nodeValue
            jogarPartida(escolhido)}
            // if (pontosUsuario < 3 && pontosJarvas <3){
            // jogarPartida(escolhido);
            // }
            // else {console.log('endegame');}
        })
        })

function jogarPartida(opcaoUsuario) {
    let opcaoComputador = opcaoAleatoria()
    console.log('Você escolheu: ' + opcaoUsuario);
    console.log('O computador escolheu: ' + opcaoComputador);
    if (opcaoUsuario == 'pedra'){   
        if (opcaoComputador == 'pedra') {
            // return pontosUsuario,
            resultado = 'Deu EMPATE';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPedra}
             ${jarvasPedra}
             <p class="miniResultado">
                ${resultado}
             </p>
             `
        } 
        else if (opcaoComputador == 'papel') {
            pontosJarvas++;
            
            // return pontosJarvas,pontosUsuario,
            resultado = '+1 para Jarvas!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPedra}
             ${jarvasPapel}
             <p class="miniResultado">
                ${resultado}
             </p>
             `
        }
        else {pontosUsuario++; 
            // return pontosJarvas,pontosUsuario, 
            resultado = '+1 para você!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPedra}
             ${jarvasTesoura}
             <p class="miniResultado">
                ${resultado}
             </p>
             `}
    }
    else if (opcaoUsuario == 'papel'){   
        if (opcaoComputador == 'pedra') {
            pontosUsuario++;
            // return pontosJarvas, pontosUsuario, 
            resultado = '+1 para você!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPapel}
             ${jarvasPedra}
             <p class="miniResultado">
                ${resultado}
             </p>
             `}
        
        else if (opcaoComputador == 'papel') {
            // return pontosJarvas,pontosUsuario,
            resultado = 'Deu EMPATE';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPapel}
             ${jarvasPapel}
             <p class="miniResultado">
                ${resultado}
             </p>
             `           
        }
        else {pontosJarvas++; 
            // return pontosJarvas,pontosUsuario,
            resultado = '+1 para Jarvas!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPapel}
             ${jarvasTesoura}
             <p class="miniResultado">
                ${resultado}
             </p>
             `   }
        }
    else if (opcaoUsuario == 'tesoura'){   
        if (opcaoComputador == 'pedra') {
            pontosJarvas++;
            // return pontosJarvas,pontosUsuario, 
            resultado = '+1 para Jarvas!'
            ;
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorTesoura}
             ${jarvasPedra}
             <p class="miniResultado">
                ${resultado}
             </p>
             `
        } 
        else if (opcaoComputador == 'papel') {
            pontosUsuario++;
            // return pontosJarvas,pontosUsuario, 
            resultado = '+1 para você!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorTesoura}
             ${jarvasPapel}
             <p class="miniResultado">
                ${resultado}
             </p>
             `
        }
        else {
            // return pontosJarvas,pontosUsuario, 
            resultado = 'Deu EMPATE';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorTesoura}
             ${jarvasTesoura}
             <p class="miniResultado">
                ${resultado}
             </p>
             `}
      
    }
    // else {console.log('error');}
    console.log(resultado,pontosUsuario,pontosJarvas);
    document.querySelector(".pontosUser > .numeroPontos").innerHTML = `<p>${pontosUsuario}</p>`
    document.querySelector(".pontosJarvas > .numeroPontos").innerHTML = `<p>${pontosJarvas}</p>` 
    
    if (pontosUsuario >= 3 || pontosJarvas >= 3){
        botoesOpcao.forEach(function (item) {
            item.disabled = true;})
        if (pontosUsuario >= 3) {
            document.querySelector(".logBatalha").innerHTML = `
            <p class="resultadoFinal">Parabéns! Você venceu!</p>
            <button class="restart" onclick="restart()">Jogar novamente</button>`
        }
        if (pontosJarvas >= 3){
            document.querySelector(".logBatalha").innerHTML = `
            <p class="resultadoFinal">Que pena! Você perdeu!</p>
            <button class="restart" onclick="restart()">Jogar novamente</button>`



            console.log('Mostrar popup informando resultado e um botao para reiniciar a partida. Se sim zera os pontos e reabilita os botoes. Senão deixa a mensagem na tela');}
    }    
}

function restart() {
    botoesOpcao.forEach(function (item) {
        item.disabled = false;})
    pontosJarvas = 0;
    pontosUsuario = 0;
    document.querySelector(".logBatalha").innerHTML = `
    <p>Log de batalha</p>`
    document.querySelector(".pontosUser > .numeroPontos").innerHTML = `<p>${pontosUsuario}</p>`
    document.querySelector(".pontosJarvas > .numeroPontos").innerHTML = `<p>${pontosJarvas}</p>` 
}


const jogadorPedra = `
<p>
    Você escolheu <strong>&nbsp;PEDRA&nbsp;</strong>
    <img src="./imagens/sketch-logo.svg" alt="pedra">
</p>`
const jogadorPapel = `
<p>
    Você escolheu <strong>&nbsp;PAPEL&nbsp;</strong>
    <img src="./imagens/newspaper-clipping.svg" alt="papel">
</p>`
const jogadorTesoura = `
<p>
    Você escolheu <strong>&nbsp;TESOURA&nbsp;</strong>
    <img src="./imagens/scissors.svg" alt="tesoura">
</p>`

const jarvasPedra = `
<p>
    Jarvas escolheu <strong>&nbsp;PEDRA&nbsp;</strong>
    <img src="./imagens/sketch-logo.svg" alt="pedra">
</p>`

const jarvasPapel = `
<p>
    Jarvas escolheu <strong>&nbsp;PAPEL&nbsp;</strong>
    <img src="./imagens/newspaper-clipping.svg" alt="papel">
</p>`
const jarvasTesoura = `
<p>
    Jarvas escolheu <strong>&nbsp;TESOURA&nbsp;</strong>
    <img src="./imagens/scissors.svg" alt="tesoura">
</p>`






// function jogarPartida() {
//     let opcaoUsuario = prompt('Qual a sua escolha? \n Pedra, papel ou tesoura?').toLowerCase()
//     let opcaoComputador = opcaoAleatoria()
//     console.log('Você escolheu: ' + opcaoUsuario);
//     console.log('O computador escolheu: ' + opcaoComputador);
//     if (opcaoUsuario == 'pedra'){   
//         if (opcaoComputador == 'pedra') {
//             return pontosUsuario,resultado = 'Empate';
//         } 
//         else if (opcaoComputador == 'papel') {
//             return pontosUsuario,resultado = 'Você perdeu!';
//         }
//         else {pontosUsuario++; return pontosUsuario, resultado = 'Você venceu!';}
//     }
//     else if (opcaoUsuario == 'papel'){   
//         if (opcaoComputador == 'pedra') {
//             pontosUsuario++
//             return pontosUsuario, resultado = 'Você venceu!';
//         } 
//         else if (opcaoComputador == 'papel') {
//             return pontosUsuario,resultado = 'Empate';
//         }
//         else {return pontosUsuario,resultado = 'Você perdeu!';}
//     }
//     else if (opcaoUsuario == 'tesoura'){   
//         if (opcaoComputador == 'pedra') {
//             return pontosUsuario, resultado = 'Você perdeu!';
//         } 
//         else if (opcaoComputador == 'papel') {
//             pontosUsuario++
//             return pontosUsuario, resultado = 'Você venceu!';
//         }
//         else {return pontosUsuario, resultado = 'Empate';}
//     }
//     else {console.log('error');}
// }

// function melhorDeCinco() {
//     for (let i = 0; i < 5; i++) {
//         jogarPartida()

//         console.log(resultado);
//         console.log(pontosUsuario);
//     }
//     if (pontosUsuario >=3) {
//         console.log('Você venceu a melhor de 5');
//     }
//     else {console.log('Você perdeu a melhor de 5');}
// }

// melhorDeCinco()
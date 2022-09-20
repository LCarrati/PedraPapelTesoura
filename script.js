const OPCOES = ['pedra', 'papel', 'tesoura']
let opcaoUsuario
let opcaoComputador
let resultado = ''
let pontosUsuario = 0
let pontosJarvas = 0
let escolhido = ''

function opcaoAleatoria() {
    let index = Math.floor(Math.random() * OPCOES.length)
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
            resultado = 'Empate';
        } 
        else if (opcaoComputador == 'papel') {
            pontosJarvas++;
            // return pontosJarvas,pontosUsuario,
            resultado = 'Você perdeu!';
        }
        else {pontosUsuario++; 
            // return pontosJarvas,pontosUsuario, 
            resultado = 'Você venceu!';}
    }
    else if (opcaoUsuario == 'papel'){   
        if (opcaoComputador == 'pedra') {
            pontosUsuario++;
            // return pontosJarvas, pontosUsuario, 
            resultado = 'Você venceu!';
        } 
        else if (opcaoComputador == 'papel') {
            // return pontosJarvas,pontosUsuario,
            resultado = 'Empate';
        }
        else {pontosJarvas++; 
            // return pontosJarvas,pontosUsuario,
            resultado = 'Você perdeu!';}
    }
    else if (opcaoUsuario == 'tesoura'){   
        if (opcaoComputador == 'pedra') {
            pontosJarvas++;
            // return pontosJarvas,pontosUsuario, 
            resultado = 'Você perdeu!';
        } 
        else if (opcaoComputador == 'papel') {
            pontosUsuario++;
            // return pontosJarvas,pontosUsuario, 
            resultado = 'Você venceu!';
        }
        else {
            // return pontosJarvas,pontosUsuario, 
            resultado = 'Empate';}
      
    }
    // else {console.log('error');}
    console.log(resultado,pontosUsuario,pontosJarvas);
    document.querySelector(".pontosUser > .numeroPontos").innerHTML = `<p>${pontosUsuario}</p>`
    document.querySelector(".pontosJarvas > .numeroPontos").innerHTML = `<p>${pontosJarvas}</p>` 
    
    if (pontosUsuario >= 3 || pontosJarvas >= 3){
        botoesOpcao.forEach(function (item) {
            item.disabled = true;})
        console.log('Mostrar popup informando resultado e um botao para reiniciar a partida. Se sim zera os pontos e reabilita os botoes. Senão deixa a mensagem na tela');}
}    



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
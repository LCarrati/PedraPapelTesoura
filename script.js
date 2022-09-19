const OPCOES = ['pedra', 'papel', 'tesoura']
let opcaoUsuario
let opcaoComputador
let resultado = ''
let pontosUsuario = 0

function opcaoAleatoria() {
    let index = Math.floor(Math.random() * OPCOES.length)
    return OPCOES[index]
}


function jogarPartida() {
    let opcaoUsuario = prompt('Qual a sua escolha? \n Pedra, papel ou tesoura?').toLowerCase()
    let opcaoComputador = opcaoAleatoria()
    console.log('Você escolheu: ' + opcaoUsuario);
    console.log('O computador escolheu: ' + opcaoComputador);
    if (opcaoUsuario == 'pedra'){   
        if (opcaoComputador == 'pedra') {
            return pontosUsuario,resultado = 'Empate';
        } 
        else if (opcaoComputador == 'papel') {
            return pontosUsuario,resultado = 'Você perdeu!';
        }
        else {pontosUsuario++; return pontosUsuario, resultado = 'Você venceu!';}
    }
    else if (opcaoUsuario == 'papel'){   
        if (opcaoComputador == 'pedra') {
            pontosUsuario++
            return pontosUsuario, resultado = 'Você venceu!';
        } 
        else if (opcaoComputador == 'papel') {
            return pontosUsuario,resultado = 'Empate';
        }
        else {return pontosUsuario,resultado = 'Você perdeu!';}
    }
    else if (opcaoUsuario == 'tesoura'){   
        if (opcaoComputador == 'pedra') {
            return pontosUsuario, resultado = 'Você perdeu!';
        } 
        else if (opcaoComputador == 'papel') {
            pontosUsuario++
            return pontosUsuario, resultado = 'Você venceu!';
        }
        else {return pontosUsuario, resultado = 'Empate';}
    }
    else {console.log('error');}
}

function melhorDeCinco() {
    for (let i = 0; i < 5; i++) {
        jogarPartida()

        console.log(resultado);
        console.log(pontosUsuario);
    }
    if (pontosUsuario >=3) {
        console.log('Você venceu a melhor de 5');
    }
    else {console.log('Você perdeu a melhor de 5');}
}

melhorDeCinco()
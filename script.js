// Declarar variáveis
const OPCOES = ['pedra', 'papel', 'tesoura']
let opcaoUsuario
let opcaoComputador
let resultado = ''
let pontosUsuario = 0
let pontosJarvas = 0
let escolhido = ''
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


// Determinar escolha do Jarvas
function opcaoAleatoria() {
    let index = Math.floor(Math.random() * (4 - 1) + 1);
    return OPCOES[index]
}


// Capturar escolha do usuário 
let botoesOpcao = document.querySelectorAll('.btnControl') 

botoesOpcao.forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (pontosUsuario < 3 && pontosJarvas <3){
            escolhido = item.attributes.alt.nodeValue
            jogarPartida(escolhido)
        }
    })
})

// Iniciar a partida
function jogarPartida(opcaoUsuario) {
    opcaoComputador = opcaoAleatoria()
    if (opcaoUsuario == 'pedra'){   
        if (opcaoComputador == 'pedra') {
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
            resultado = '+1 para você!';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorPapel}
             ${jarvasPedra}
             <p class="miniResultado">
                ${resultado}
             </p>
             `}
        
        else if (opcaoComputador == 'papel') {
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
            resultado = 'Deu EMPATE';
            document.querySelector(".logBatalha").innerHTML = 
            `${jogadorTesoura}
             ${jarvasTesoura}
             <p class="miniResultado">
                ${resultado}
             </p>
             `}
    }
    
    // Atualizar quadro de pontos
    document.querySelector(".pontosUser > .numeroPontos").innerHTML = `<p>${pontosUsuario}</p>`
    document.querySelector(".pontosJarvas > .numeroPontos").innerHTML = `<p>${pontosJarvas}</p>` 
    
    // Determinar fim de jogo
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
        }
    }    
}


// Reiniciar a partida
function restart() {
    botoesOpcao.forEach(function (item) {
        item.disabled = false;
    })
    pontosJarvas = 0;
    pontosUsuario = 0;
    document.querySelector(".logBatalha").innerHTML = `
    <p>Log de batalha</p>`
    document.querySelector(".pontosUser > .numeroPontos").innerHTML = `<p>${pontosUsuario}</p>`
    document.querySelector(".pontosJarvas > .numeroPontos").innerHTML = `<p>${pontosJarvas}</p>` 
}
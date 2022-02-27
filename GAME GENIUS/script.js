let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
let tituloScore = document.querySelector('[data-js="score"]');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i])[0];
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 1500;

    setTimeout(() => {
        somGame(element.className);
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    let elements  = createColorElement(color);
    clickedOrder[clickedOrder.length] = color;
 
    somGame(elements[1]);
    elements[0].classList.add('selected');
    
    setTimeout(() => {
        elements[0].classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return [green, 'green'];
    } else if(color == 1) {
        return [red, 'red'];
    } else if (color == 2) {
        return [yellow, 'yellow'];
    } else if (color == 3) {
        return [blue, 'blue'];
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    tituloScore.innerHTML = ++score;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

let somGame = (nameSound)=> {
    document.querySelector(`[data-js='som-${nameSound}'`).play();
}

//funcao de inicio do jogo
let playGame = () => {
    tituloScore.innerHTML = 0;
    shuffleOrder();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();

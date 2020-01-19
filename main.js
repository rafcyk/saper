const btnStart = document.querySelector('button.start');
const smallSize = document.querySelector('label.smallSize input');
const midSize = document.querySelector('label.midSize input');
const bigSize = document.querySelector('label.bigSize input');
const container = document.querySelector('div.container');
const divLoose = document.querySelector('div.loose');
const divWin = document.querySelector('div.win');
const winGame = document.querySelector('div.results p.winGame span');
const looseGame = document.querySelector('div.results p.looseGame span');

let squaresTab = [];
let smallWin = 91;
let midWin = 381;
let bigWin = 871;
let countWinGame = 0;
let countLooseGame = 0;

const smallFn = ()=> {
    squaresTab = [];
    smallWin = 91;

    container.className = 'container small';

    divLoose.style.display = 'none';
    divWin.style.display = 'none';
    

    while(container.firstChild) container.removeChild(container.firstChild);

    for(let i = 0; i < 10; i++){
        squaresTab[i] = [];
        for(let j = 0; j < 10;j++){
            //create element div square
            const square = document.createElement('div');
            square.className = 'square goodSquare';
    
            //add square to container
            container.appendChild(square);
            //add squares to array
            squaresTab[i][j] = square;
            square.style.pointerEvents = 'auto';
        }
    }


    for(let i = 0; i < 10; i++){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
    
        while(squaresTab[x][y].classList.contains('badSquare')){
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        }
    
        squaresTab[x][y].className = 'square badSquare';
    }

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
    
            square.id = "hide";
    
            let bombNumber = 0;
    //connditionals to see how many badSquares are around
            if(square.classList.contains('goodSquare')){
                if(indexFirst !== 0 && indexFirst !== 9 && indexSecond !== 0 && indexSecond !== 9){
                    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
    
                    
                }
                else if(indexFirst == 0 && indexSecond ==0){
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexFirst == 0 && indexSecond ==9){
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 9 && indexSecond ==0){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 9 && indexSecond == 9){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
    
                else if(indexFirst == 0 && (indexSecond > 0 && indexSecond < 9)){
    
                    if(squaresTab[indexFirst][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 9 && (indexSecond > 0 && indexSecond < 9)){
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
                }
    
                else if(indexSecond == 0 && (indexFirst > 0 && indexFirst < 9)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexSecond == 9 && (indexFirst > 0 && indexFirst < 9)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                square.textContent = bombNumber;
                
            }
        })
    });

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
        
            //after click you see number of badSquares around
    const dontHide = () => {
        
        if(window.innerWidth < 700){
            square.style.fontSize = 10 + 'px';
            console.log('hello');
        }
        else{
            square.style.fontSize = 20 + 'px';
        }
        
        if(square.classList.contains('badSquare')){
            square.style.fontSize = 0 + 'px';
            divLoose.style.display = 'block';
            countLooseGame++;
            looseGame.textContent = countLooseGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }

        if(square.id == "hide"){
                smallWin--;
        }

        if(square.textContent == 0 && square.classList.contains('goodSquare')){
            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
    
                    if(square.textContent == 0 && square.classList.contains('goodSquare')){
                        if(square.id == "hide"){
                            smallWin--;
                        }
                        square.id = "";
                        if(window.innerWidth < 700){
                            square.style.fontSize = 5 + 'px';
                            console.log('hello');
                        }
                        else{
                            square.style.fontSize = 20 + 'px';
                        }
                    }
    
                })
        
            });
        }

        if(smallWin == 0){
            divWin.style.display = 'block';
            countWinGame++;
            winGame.textContent = countWinGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }

        square.id = "";
    }
    
    square.addEventListener('click',dontHide);
        })
    });

}

const midlFn = ()=> {
    squaresTab = [];
    container.className = 'container mid';
    midWin = 381;

    divLoose.style.display = 'none';
    divWin.style.display = 'none';

    while(container.firstChild) container.removeChild(container.firstChild);

    for(let i = 0; i < 20; i++){
        squaresTab[i] = [];
        for(let j = 0; j < 20;j++){
            //create element div square
            const square = document.createElement('div');
            square.className = 'square goodSquare';
    
            //add square to container
            container.appendChild(square);
            //add squares to array
            squaresTab[i][j] = square;
            square.style.pointerEvents = 'auto';
        }
    }

    for(let i = 0; i < 20; i++){
        let x = Math.floor(Math.random() * 20);
        let y = Math.floor(Math.random() * 20);
    
        while(squaresTab[x][y].classList.contains('badSquare')){
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 20);
        }
    
        squaresTab[x][y].className = 'square badSquare';
    }

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
    
            square.id = "hide";
    
            let bombNumber = 0;
    //connditionals to see how many badSquares are around
            if(square.classList.contains('goodSquare')){
                if(indexFirst !== 0 && indexFirst !== 19 && indexSecond !== 0 && indexSecond !== 19){
                    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
    
                    
                }
                else if(indexFirst == 0 && indexSecond ==0){
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexFirst == 0 && indexSecond ==19){
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 19 && indexSecond ==0){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 19 && indexSecond == 19){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
    
                else if(indexFirst == 0 && (indexSecond > 0 && indexSecond < 19)){
    
                    if(squaresTab[indexFirst][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 19 && (indexSecond > 0 && indexSecond < 19)){
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
                }
    
                else if(indexSecond == 0 && (indexFirst > 0 && indexFirst < 19)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexSecond == 19 && (indexFirst > 0 && indexFirst < 19)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                square.textContent = bombNumber;
                
            }
        })
    });

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
        
            //after click you see number of badSquares around
    const dontHide = () => {
        
        if(window.innerWidth < 700){
            square.style.fontSize = 10 + 'px';
            console.log('hello');
        }
        else{
            square.style.fontSize = 20 + 'px';
        }
        

        if(square.id == "hide"){
            midWin--;
        }
        
        if(square.classList.contains('badSquare')){
            
            square.style.fontSize = 0 + 'px';
            divLoose.style.display = 'block';
            countLooseGame++;
            looseGame.textContent = countLooseGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }

        if(square.textContent == 0 && square.classList.contains('goodSquare')){
            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
    
                    if(square.textContent == 0 && square.classList.contains('goodSquare')){
                        if(square.id = "hide"){
                            midWin--;
                        }
            
                        square.id = "";

                        if(window.innerWidth < 700){
                            square.style.fontSize = 10 + 'px';
                            console.log('hello');
                        }
                        else{
                            square.style.fontSize = 20 + 'px';
                        }
                    }

                    
    
                })
        
            });
        }

        if(midWin == 0){
            divWin.style.display = 'block';
            countWinGame++;
            winGame.textContent = countWinGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }

        square.id = "";

    }
    
    square.addEventListener('click',dontHide);
        })
        
    });
    
}

const bigFn = ()=> {
    container.className = 'container big';
    squaresTab = [];

    divLoose.style.display = 'none';
    divWin.style.display = 'none';
    bigWin = 871;

    while(container.firstChild) container.removeChild(container.firstChild);

    for(let i = 0; i < 30; i++){
        squaresTab[i] = [];
        for(let j = 0; j < 30;j++){
            //create element div square
            const square = document.createElement('div');
            square.className = 'square goodSquare';
    
            //add square to container
            container.appendChild(square);
            //add squares to array
            squaresTab[i][j] = square;
            square.style.pointerEvents = 'auto';
        }
    }


    for(let i = 0; i < 40; i++){
        let x = Math.floor(Math.random() * 30);
        let y = Math.floor(Math.random() * 30);
    
        while(squaresTab[x][y].classList.contains('badSquare')){
        x = Math.floor(Math.random() * 30);
        y = Math.floor(Math.random() * 30);
        }
    
        squaresTab[x][y].className = 'square badSquare';
    }

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
    
            square.id = "hide";
    
            let bombNumber = 0;
    //connditionals to see how many badSquares are around
            if(square.classList.contains('goodSquare')){
                if(indexFirst !== 0 && indexFirst !== 29 && indexSecond !== 0 && indexSecond !== 29){
                    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
    
                    
                }
                else if(indexFirst == 0 && indexSecond == 0){
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexFirst == 0 && indexSecond == 29){
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 29 && indexSecond ==0){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 29 && indexSecond == 29){
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
    
                else if(indexFirst == 0 && (indexSecond > 0 && indexSecond < 29)){
    
                    if(squaresTab[indexFirst][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                }
    
                else if(indexFirst == 29 && (indexSecond > 0 && indexSecond < 29)){
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond-1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
                    
                }
    
                else if(indexSecond == 0 && (indexFirst > 0 && indexFirst < 29)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond + 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                else if(indexSecond == 29 && (indexFirst > 0 && indexFirst < 29)){
                    
                    if(squaresTab[indexFirst - 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst - 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond - 1].classList.contains('badSquare')){
                        bombNumber++;
                    }
    
                    if(squaresTab[indexFirst + 1][indexSecond].classList.contains('badSquare')){
                        bombNumber++;
                    }
                }
    
                square.textContent = bombNumber;
                
            }
        })
    });

    squaresTab.forEach((squareRow, indexFirst) => {
        squareRow.forEach((square, indexSecond) => {
        
            //after click you see number of badSquares around
    const dontHide = () => {
        
        if(square.id == "hide"){
            bigWin--;
        }

        if(window.innerWidth < 700){
            square.style.fontSize = 10 + 'px';
            console.log('hello');
        }
        else{
            square.style.fontSize = 20 + 'px';
        }
        
        if(square.classList.contains('badSquare')){
            square.style.fontSize = 0 + 'px';
            divLoose.style.display = 'block';
            countLooseGame++;
            looseGame.textContent = countLooseGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }

        if(square.textContent == 0 && square.classList.contains('goodSquare')){
            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
    
                    if(square.textContent == 0 && square.classList.contains('goodSquare')){
                        if(square.id == "hide"){
                            bigWin--;
                        }
                        square.id = "";
                        if(window.innerWidth < 700){
                            square.style.fontSize = 10 + 'px';
                            console.log('hello');
                        }
                        else{
                            square.style.fontSize = 20 + 'px';
                        }
                    }
    
                })
        
            });
        }

        if(bigWin == 0){
            divWin.style.display = 'block';
            countWinGame++;
            winGame.textContent = countWinGame;

            squaresTab.forEach((squareRow, indexFirst) => {
                squareRow.forEach((square, indexSecond) => {
            square.style.pointerEvents = 'none';
                })
            })
        }



        square.id = "";
    }
    
    square.addEventListener('click',dontHide);
        })
        
    });
    
}

btnStart.addEventListener('click', function(){

        if(smallSize.checked){
            smallFn();
        }
        
        else if(midSize.checked){
            midlFn();
        }
        
        else if(bigSize.checked){
            bigFn();
        }
})


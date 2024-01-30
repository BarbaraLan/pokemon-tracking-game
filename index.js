console.log('hello world')
let enemyCreationFrame = 100;
let catchesIncrementFrame = 10;
let enemyVelocity = 10;
let gameLives = 3;

const boardElement = document.querySelector("#game-board");

console.log(boardElement.getBoundingClientRect())

const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;


let game;
const startButton = document.querySelector("#startButton");
setTimeout(()=> {
    startButton.style.visibility='visible' 
},7500)
startButton.onclick = () => {
    console.log('boton pulsado');
    const deletePage = document.querySelector("#start-board");
    deletePage.remove()
    const newBoard = document.querySelector("#game-board");
    newBoard.style.visibility='visible'
    
    game = new Game(gameLives);
    const gameOverElement = document.querySelector('#gameOver')
    game.player.element.style.visibility='visible'

    function gameLoop() {
        if (!game.gameOver) {
            game.frames++;
            game.player.crashTest()
            if (game.frames % enemyCreationFrame === 0) {
                game.enemies.push(new Enemy(enemyVelocity));
                console.log(game.enemies);
            }
            if (game.frames % catchesIncrementFrame === 0) {
                game.catches++;
                game.updateCatches();
            }
            if (game.catches >= 10) {
                game.player.element.style.backgroundImage = "url('./pokemon-images/charmeleon.png')"
            }
    
            if (game.catches >= 20) {
                game.player.element.style.backgroundImage = "url('./pokemon-images/Charizard2.webp')"
            }
    
            game.enemies.forEach((enemy) => {
                enemy.move()
                enemy.checkForBoundaries()
            })
            requestAnimationFrame(gameLoop);
        } else {
            gameOverElement.style.display = 'flex'
            game.player.element.remove();
        }
    }
    requestAnimationFrame(gameLoop);

    document.addEventListener("keydown", (event) => {
        if (!game.gameOver) {
            game.player.move(event.key);
        }
    
    
    })
}






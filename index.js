console.log('hello world')

let enemyCreationFrame = 150;
let catchesIncrementFrame = 10;
let enemyVelocity = 10;
let gameLives = 3;

const boardElement = document.querySelector("#game-board");

console.log(boardElement.getBoundingClientRect())

const boardWidth = boardElement.getBoundingClientRect().width;
const boardHeight = boardElement.getBoundingClientRect().height;


let game;
let musicGame = new Audio('./musicGame/gameMusic.mp3');
const startButton = document.querySelector("#startButton");
setTimeout(() => {
    startButton.style.visibility = 'visible'
}, 1500)
startButton.onclick = () => {
    console.log('boton pulsado');
    const deletePage = document.querySelector("#start-board");
    deletePage.remove()
    musicGame.play();
    musicGame.loop = 'loop';
    
    const newBoard = document.querySelector("#game-board");
    newBoard.style.visibility = 'visible'

    game = new Game(gameLives);
    const gameOverElement = document.querySelector('#gameOver')
    game.player.element.style.visibility = 'visible'

    function gameLoop() {
        if (!game.gameOver) {
            game.frames++;
            game.player.crashTest()
            if (game.frames % enemyCreationFrame === 0) {
                game.enemies.push(new Enemy(enemyVelocity));
                let musicEnemy = new Audio('./musicGame/enemySound2.wav');
                musicEnemy.play();
                console.log(game.enemies);
            }

            if (game.catches >= 10) {
                game.level = ' 2';
                game.updateLevels();
                let musicLevel = new Audio('./musicGame/levelUp.mp3');
                musicLevel.play();
                enemyCreationFrame = 100;
                game.player.element.style.backgroundImage = "url('./pokemon-images/charmeleon.png')"
            }

            if (game.catches >= 20) {
                game.level = ' 3';
                game.updateLevels();
                let musicLevel = new Audio('./musicGame/levelUp.mp3');
                musicLevel.play();
                enemyCreationFrame = 50;
                game.player.element.style.backgroundImage = "url('./pokemon-images/Charizard2.webp')"
            } 

            game.enemies.forEach((enemy) => {
                enemy.move()
                enemy.checkForBoundaries()
            })

            game.powers.forEach((power) => {
                power.move()
                power.checkForBoundaries()
                power.crashTestPowers()
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






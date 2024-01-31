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
let playMusicLevel2 = true;
let playMusicLevel3 = true;
let musicGame = new Audio('./musicGame/gameMusic.mp3');
let IntroGame = new Audio('./musicGame/introMusic.mp3');
const startButton = document.querySelector("#startButton");
const musicButton = document.querySelector("#musicButton");

musicButton.onclick = () => {
    IntroGame.play();
    IntroGame.loop = 'loop';
}
setTimeout(() => {
    startButton.style.visibility = 'visible'
}, 1500)
startButton.onclick = () => {
    console.log('boton pulsado');
    IntroGame.pause()
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

            if (game.catches >= 1) {
                game.level = ' 2';
                game.updateLevels();
                if(playMusicLevel2){
                    let musicLevel2 = new Audio('./musicGame/levelUp.mp3');
                    playMusicLevel2 = false;
                    musicLevel.play();
                }
                enemyCreationFrame = 100;

                if (game.character === "Charmander") {
                    this.element.style.backgroundImage = "url('./pokemon-images/charmeleon.png')"
                }
                else if (game.character === "Squirtle") {
                    this.element.style.backgroundImage = "url('./pokemon-images/squirlEvol.jpeg')"
                }
                else if (game.character === "Bulbasaur") {
                    this.element.style.backgroundImage = "url('./pokemon-images/ivysaur.jpeg')"
                }
            }

            if (game.catches >= 3) {
                game.level = ' 3';
                game.updateLevels();
                if(playMusicLevel3){
                    let musicLevel3 = new Audio('./musicGame/levelUp.mp3');
                    playMusicLevel3 = false;
                    musicLevel.play();
                }
                musicLevel.play();
                enemyCreationFrame = 50;
                
                if (game.character === "Charmander") {
                    this.element.style.backgroundImage = "url('./pokemon-images/Charizard2.webp')"
                }
                else if (game.character === "Squirtle") {
                    this.element.style.backgroundImage = "url('./pokemon-images/blastoise.jpeg')"
                }
                else if (game.character === "Bulbasaur") {
                    this.element.style.backgroundImage = "url('./pokemon-images/venasaur.webp')"
                }
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






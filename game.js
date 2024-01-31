class Game {
    constructor(lives, character) {
        this.enemies = [];
        this.character = character;
        this.catches = 0;
        this.updateCatches();
        this.frames = 0;
        this.gameOver = false;
        this.powers = []
        this.level = ' 1'
        this.lives = lives;
        this.updateLives();

        if(this.character === 'charmander'){
            this.player = new Charmander(100,100)
        }
        if(this.character === 'squirtle'){
            this.player = new Squirtle(100,100)
        }
        if(this.character === 'bulbasaur'){
            this.player = new Bulbasaur(100,100)
        }
    }

    updateLives() {
        document.querySelector("#lives").innerText = this.lives;
        if (this.lives <= 0) {
            this.gameOver = true;
            this.endGame()
        }
    }

    updateLevels() {
        document.querySelector("#levels").innerText = this.level;
    }

    updateCatches() {
        document.querySelector("#catches").innerText = this.catches;
    }

    endGame() {
        if (this.gameOver === true) {
            musicGame.pause();
            let musicEnd = new Audio('./musicGame/gameOver.mp3');
            musicEnd.play();
            document.querySelector("#gameOver").style.display = 'flex';
            game.player.deSpawnPlayer();
            game.enemies.forEach((enemy) => {
                enemy.deSpawn()})
            document.querySelector("#game-board").style.backgroundImage = "url('./pokemon-images/endImage.gif')"
            document.querySelector("#gameStats").remove()

            const restartButton = document.querySelector("#restartButton")
            restartButton.onclick =() => {
                location.reload()
            }
        }
    }
}

class Game {
    constructor(lives) {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.catches = 0;
        this.updateCatches();
        this.frames = 0;
        this.gameOver = false;
        this.powers = []
        this.level = ' 1'
        this.lives = lives;
        this.updateLives();
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

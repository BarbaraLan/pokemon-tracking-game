class Game {
    constructor(lives) {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.catches = 0;
        this.frames = 0;
        this.gameOver = false;
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

    updateCatches() {
        document.querySelector("#catches").innerText = this.catches;
    }

    endGame() {
        if (this.gameOver === true) {
            endGameDisplay = document.querySelector("#game-over").style.display = 'flex';
        }
    }
}
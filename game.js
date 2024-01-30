class Game {
    constructor(lives) {
        this.enemies = [];
        this.player = new Player(100, 100);
        this.catches = 0;
        this.updateCatches();
        this.frames = 0;
        this.gameOver = false;
        this.powers = []
        this.level = level
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
        if (this.level = level2) {
            this.level += 1
        }
        else if (this.level = level3) {
            this.level += 2
        }
    }

    updateCatches() {
        document.querySelector("#catches").innerText = this.catches;
    }

    endGame() {
        if (this.gameOver === true) {
            endGameDisplay = document.querySelector("#gameOver").style.display = 'flex';
        }
    }
}


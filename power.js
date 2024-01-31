class Power {
    constructor() {
        this.velocity = 10;
        this.element = document.createElement("div");
        this.element.classList.add("power");
        boardElement.appendChild(this.element);
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.x = game.player.x;
        this.y = game.player.y;
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
        if (game.character === "charmander") {
            this.element.style.backgroundImage = "url('./pokemon-images/fireBall2.png')"
        }
        else if (game.character === "squirtle") {
            this.element.style.backgroundImage = "url('./pokemon-images/waterBall2.png')"
        }
        else if (game.character === "bulbasaur") {
            this.element.style.backgroundImage = "url('./pokemon-images/leavesBall2.png')"
        }
    }

    move() {
        this.x += this.velocity;
        this.element.style.left = `${this.x}px`
    }

    checkForBoundaries() {
        if (this.x >= boardWidth) {
            this.deSpawn()
        }
    }

    deSpawn() {
        const powersIndex = game.powers.indexOf(this)
        game.powers.splice(powersIndex, 1)
        this.element.remove()
    }

    crashTestPowers() {
        game.enemies.forEach((enemy) => {
            const enemyLeftEdge = enemy.x;
            const enemyRightEdge = enemy.x + enemy.width;
            const enemyTopEdge = enemy.y;
            const enemyBottomEdge = enemy.y + enemy.height;

            const powerLeftEdge = this.x;
            const powerRightEdge = this.x + this.width;
            const powerTopEdge = this.y;
            const powerBottomEdge = this.y + this.height;

            if (
                powerLeftEdge < enemyRightEdge &&
                powerRightEdge > enemyLeftEdge &&
                powerTopEdge < enemyBottomEdge &&
                powerBottomEdge > enemyTopEdge
            ) {
                game.catches += 1;
                game.updateCatches();
                enemy.deSpawn();
            }
        })
    }
}
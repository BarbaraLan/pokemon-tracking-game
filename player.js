class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 10
        this.element = document.querySelector("#player");
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }

    move(direction) {
        switch (direction) {
            case "ArrowUp":
                this.y -= this.velocity;
                break;
            case "ArrowDown":
                this.y += this.velocity;
                break;
            case "ArrowLeft":
                this.x -= this.velocity;
                break;
            case "ArrowRight":
                this.x += this.velocity;
                break;
        };

        this.checkForBoundaries()

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    checkForBoundaries() {
        if (this.x <= 0) {
            this.x = 0;
        }
        if (this.y <= 0) {
            this.y = 0;
        }
        if (this.y >= boardHeight - this.height) {
            this.y = boardHeight - this.height;
        }
        if (this.x >= boardWidth - this.width) {
            this.x = boardWidth - this.width;
        }
    }

    crashTest() {
        game.enemies.forEach((enemy) => {

            if (
                playerLeftEdge < enemyRightEdge &&
                playerRightEdge > enemyLeftEdge &&
                playerTopEdge < enemyBottomEdge &&
                playerBottomEdge > enemyTopEdge
            ) {
                game.lives -= 1;
                game.updateLives();
                enemy.deSpawn();
            }
        });
    }
}

class Power {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 10

        powerOption() {
            this.element
            document.createElement('')
            const firePower = 

            if () { }

        }
    }
}
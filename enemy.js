class Enemy {
    constructor(velocity) {
    const imagesArray =["url('./pokemon-images/psyduck.png')", "url('./pokemon-images/ditto.png')", "url('./pokemon-images/cubone.png')"]
        this.velocity = velocity;
        this.element = document.createElement("div");
        this.element.classList.add("enemy");
        this.element.style.backgroundImage = imagesArray[Math.floor(Math.random() *imagesArray.length)]
        console.log(Math.floor(Math.random() *imagesArray.length));
        boardElement.appendChild(this.element);
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.x = boardWidth;
        this.y = Math.floor(Math.random() * (boardHeight - this.height))
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`
    }

    move() {
        this.x -= this.velocity;
        this.element.style.left = `${this.x}px`
    }

    checkForBoundaries() {
        if (this.x <= 0 - this.width) {
            this.deSpawn()
        }
    }

    deSpawn() {
        this.element.remove()
        const enemyIndex = game.enemies.indexOf(this) 
        game.enemies.splice(enemyIndex, 1);
    }

}
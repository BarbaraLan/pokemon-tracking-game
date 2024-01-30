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

}

/* powerOption() {
    this.element
    document.createElement('')
    const firePower = 

            if () { }

} */
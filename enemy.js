class Enemy {
    constructor(velocity) {
        const imagesLevel1 = ["url('./pokemon-images/psyduck.png')", "url('./pokemon-images/ditto.png')", "url('./pokemon-images/cubone.png')"]
        const imagesLevel2 = ["url('./pokemon-images/gastly.png')", "url('./pokemon-images/110.png')", "url('./pokemon-images/gengar2.png')"]
        const imagesLevel3 = ["url('./pokemon-images/ekans.webp')", "url('./pokemon-images/poliwhirl.png')", "url('./pokemon-images/mewtwo.png')"]
        const imagesArray = enemyImage()
        
        function enemyImage() {
            if (game.level === ' 1') {
            return imagesLevel1
        }
            else if (game.level === ' 2') {
            return imagesLevel2
        }
        else if (game.level === ' 3') {
            return imagesLevel3
        }
    }; 
        this.velocity = velocity;
this.element = document.createElement("div");
this.element.classList.add("enemy");
this.element.style.backgroundImage = imagesArray[Math.floor(Math.random() * imagesArray.length)]
console.log(Math.floor(Math.random() * imagesArray.length));
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
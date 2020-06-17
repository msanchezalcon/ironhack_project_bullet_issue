const Game = {
    name: "Canvas App",
    description: "Finding Jack",
    version: "1.0.0",
    author: "Eva y Míriam",
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight,
    },
    background: undefined,
    hero: undefined,
    bullets: undefined,
    generalObstacle: [],
    obstacles: undefined,

    // initiates game
    init() {
        console.log("estoy leyendo el init de game.js")
        this.canvasDom = document.getElementById("board")
        this.ctx = this.canvasDom.getContext("2d")
        this.canvasDom.setAttribute("width", this.canvasSize.w)
        this.canvasDom.setAttribute("height", this.canvasSize.h)
        this.generatorObstacles()
        this.start()
    },

    // drawing all examples
    start() {
        this.reset()

        setInterval(() => {
            this.clear()
            this.hero.shoot()
            // this.hero.clearBullets()
            this.drawAll()
            this.hero.moveHero()
        }, 1000)
    },

    reset() {
        this.hero = new Hero(
            this.ctx,
            this.canvasSize.w / 2 - 450,
            this.canvasSize.h / 2 - 250,
            this.posXmove,
            this.posYmove
        )
        this.background = new Background(
            this.ctx,
            this.canvasSize.w / 2 - 450,
            this.canvasSize.h / 2 - 250
        )
    },

    //defining all drawing all instances
    drawAll() {
        //1. background
        this.background.draw()

        //2. obstacles
        this.generalObstacle.forEach((obs) => obs.draw())

        //3. hero
        this.hero.draw()

        //5. bullet
        // this.bullets.forEach((b) => b.draw())

    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    //generating new instance and pushing each one to the obstacles array
    generatorObstacles() {
        for (let i; this.generalObstacle.length < 5; i++) {
            this.obstacles = new Obstacle(this.ctx)
            this.generalObstacle.push(this.obstacles)
        }
    },

    checkObstacle() {

    },

    // moveHero() {
    //     document.onkeydown = e => {
    //         if (e.keyCode === 37) {
    //             this.move('left')
    //         } else if (e.keyCode === 39) {
    //             console.log('toco tecla 37')
    //             this.move('right')
    //         } else if (e.keyCode === 40) {
    //             this.move('up')
    //         } else if (e.keyCode === 38) {
    //             this.move('down')
    //         } else {
    //             return null
    //         }
    //     }
    // },

    // move(dir) {
    //     if (dir === 'left') {
    //         this.posX -= this.speed
    //     } else if (dir === 'right') {
    //         this.posX += this.speed
    //     } else if (dir === 'up') {
    //         this.posY += this.speed
    //     } else if (dir === 'down') {
    //         this.posY -= this.speed
    //     } else {
    //         return null
    //     }
    // }

}
class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        this.obstX = Math.round((Math.random() * (1300 - 550) + 550) / 50) * 50
        this.obstY = Math.round((Math.random() * (600 - 250) + 250) / 50) * 50
        this.obstW = 100
        this.obstH = 50
        //this.obstH = Math.round((Math.random() * ((680 - this.obstY) - 30) + 30) / 10) * 10
    }


    draw() {
        this.ctx.fillRect(this.obstX, this.obstY, this.obstW, this.obstH);
    }
}

// vamos a definir la posicion random aqui, y se pinta el resultado en la app.
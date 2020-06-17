// Our main character, the hero
class Hero {
  constructor(ctx, posX, posY) {
    this.posX = posX
    this.posY = posY
    //  this.posXmove = posXmove;
    //  this.posYmove = posYmove;
    this.width = 100
    this.height = 50
    this.image = new Image()
    this.image.src = `./img/poop.png`
    this.speed = 50
    this.ctx = ctx
    this.bullets = []
  }

  // Draw Hero
  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    )
  }

  moveHero() {
    document.onkeydown = e => {
      if (e.keyCode === 37) {
        this.move('left')
      } else if (e.keyCode === 39) {
        //console.log('toco tecla 39')
        this.move('right')
      } else if (e.keyCode === 40) {
        this.move('up')
      } else if (e.keyCode === 38) {
        this.move('down')
      } else if (e.keyCode === 32) {
        this.shoot()
      } else {
        return null
      }
    }
  }

  move(dir) {
    if (dir === 'left') {
      this.posX -= this.speed
    } else if (dir === 'right') {
      this.posX += this.speed
    } else if (dir === 'up') {
      this.posY += this.speed
    } else if (dir === 'down') {
      this.posY -= this.speed
    } else {
      return null
    }
  }

  shoot() {
    console.log('shoot method')
    this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.width, this.height))
  }

  clearBullets() {
    console.log('clear bullets method')
    // this.bullets = this.bullets.filter(b => b.posX <= this.posX);

  }
}

// Our enemy, the monster
// class Monster extends Character {
//   constructor()
//   super()
// }
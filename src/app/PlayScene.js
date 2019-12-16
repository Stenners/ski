import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'play' })
    this.random = Phaser.Math.RND
  }

  init() {
    this.gameOver = false
    this.score = 0
    this.width = this.game.canvas.width
    this.height = this.game.canvas.height
  }

  create() {
    this.trees = this.physics.add.staticGroup()
    for (let index = 0; index < this.random.integerInRange(this.width/4, this.width/2); index++) {
      const tree = this.trees.create(this.random.between(0,this.width*1.2), this.random.between(0,this.height*1.2), 'tree1')
    }
  }

  update() {
    if (this.gameOver) {
      this.scene.stop().run('end')
      return
    }
  }
}

export default MainScene

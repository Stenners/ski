class BootScene extends Phaser.Scene {
  preload() {
    // Assets
    this.load.image('tree1', require('../assets/tree2.png'))
  }

  update() {
    this.scene.start('play')
    this.scene.remove()
  }
}

export default BootScene

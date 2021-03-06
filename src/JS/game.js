import Phaser from 'phaser';
import SceneMainMenu from './SceneMainMenu';
import SceneMain from './SceneMain';
import SceneGameOver from './SceneGameOver';

let config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 520,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true
}

const game = new Phaser.Game(config);
import sprBtnPlay from '../Assets/sprBtnPlay.png';
import sprBtnPlayHover from '../Assets/sprBtnPlayHover.png';
import sprBtnPlayDown from '../Assets/sprBtnPlayDown.png';
import sprBtnRestart from '../Assets/sprBtnRestart.png';
import sprBtnRestartHover from '../Assets/sprBtnRestartHover.png';
import sprBtnRestartDown from '../Assets/sprBtnRestartDown.png';
import sndBtnOver from '../Assets/sndBtnOver.wav';
import sndBtnDown from '../Assets/sndBtnDown.wav';
export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  preload() {
    this.load.image("sprBtnPlay", sprBtnPlay);
    this.load.image("sprBtnPlayHover", sprBtnPlayHover);
    this.load.image("sprBtnPlayDown", sprBtnPlayDown);
    this.load.image("sprBtnRestart", sprBtnRestart);
    this.load.image("sprBtnRestartHover", sprBtnRestartHover);
    this.load.image("sprBtnRestartDown", sprBtnRestartDown);

    this.load.audio("sndBtnOver", sndBtnOver);
    this.load.audio("sndBtnDown", sndBtnDown);
  }

  create() {
    this.scene.start("SceneMain");
  }
}
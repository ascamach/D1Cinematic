class test_scene extends Phaser.scene {
    constructor() {
        super("test_scene");
    }

    preload() {
        this.load.path = "./assets/";
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: "FFFFFF",
    scene: [test_scene]
}

let game = new Phaser.Game(config);
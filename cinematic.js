class test_scene extends Phaser.scene {
    constructor() {
        super("test_scene");
    }

    preload() {
        this.load.path = "./assets/";
        this.load.audio("woosh", ["woosh.mp3"]);
    }

    create() {
        let woosh = this.sound.add("woosh");

        woosh.play();
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
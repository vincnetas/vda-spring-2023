var config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    backgroundColor: "#0055aa",
    width: 800,
    scene: [Scene1],
    height: 600,
    physics: {
      default: 'matter',
      matter: {
        gravity: {
          y: 0,
        },
        debug: true,
      },
    },
  };
  
  var game = new Phaser.Game(config);
  
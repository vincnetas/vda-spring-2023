// https://photonstorm.github.io/phaser3-docs/

class Scene1 extends Phaser.Scene {
    constructor() {
      super({
        key: "scene1",
      });
    }
  
    preload() {
      this.load.image(
        "dog",
        "img/dog.png"
      );
    }
  
    create() {
      this.speed = 3;
      this.matter.world.setBounds(0, 0, 800, 600);
  
      this.dogSprite = this.matter.add.sprite(200, 200, "dog");
  
      this.dogSprite.setFixedRotation();
      
      this.dogSprite.setInteractive();
      this.dogSprite.on("pointerdown", this.whenDogClicked, this);
  
      // https://photonstorm.github.io/phaser3-docs/Phaser.Types.Physics.Matter.html#.MatterBodyConfig
      this.circleObject = this.matter.add.circle(200, 400, 50, {
        isStatic: true,
      });
  
      this.circleSensor = this.matter.add.circle(400, 200, 10, {
        isSensor: true,
        isStatic: true,
      });
  
      this.dogSprite.setOnCollideWith(this.circleObject, () => {
        alert("labas")
      });
  
      this.dogSprite.setOnCollideWith(this.circleSensor, () => {
        this.newCircle = this.matter.add.circle(400, 400, 20, {isStatic: true});
        
        this.dogSprite.setOnCollideWith(this.circleSensor, () => {});
        
        this.dogSprite.setOnCollideWith(this.newCircle, () => {
          this.scene.start('scene2');
        })
      });
  
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
  
    whenDogClicked() {
      // https://photonstorm.github.io/phaser3-docs/Phaser.Math.html#.Between__anchor
      var speedX = Phaser.Math.Between(-5, 5);
      var speedY = Phaser.Math.Between(-20, -10);
      var speedAngle = Phaser.Math.FloatBetween(0.001, 0.005);
  
      this.dogSprite.setVelocity(speedX, -speedY);
      this.dogSprite.setAngularVelocity(speedAngle);
    }
  
    update() {   
      this.dogSprite.setVelocity(0);
      
      if (this.keyD.isDown) {
        this.dogSprite.setVelocityX(this.speed)
      }
  
      if (this.keyA.isDown) {
        this.dogSprite.setVelocityX(-this.speed)
      }
  
      if (this.keyW.isDown) {
        this.dogSprite.setVelocityY(-this.speed)
      }
  
      if (this.keyS.isDown) {
        this.dogSprite.setVelocityY(this.speed)
      }
    }
  }
  
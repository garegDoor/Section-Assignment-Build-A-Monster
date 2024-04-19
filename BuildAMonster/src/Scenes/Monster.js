class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.arm1 = this.add.sprite(this.bodyX + 100, this.bodyY + 45, "monsterParts", "arm_darkB.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 100, this.bodyY + 45, "monsterParts", "arm_whiteB.png");
        my.sprite.arm2.flipX = true;
        my.sprite.leg1 = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_whiteC.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_darkC.png");
        my.sprite.leg2.flipX = true;
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenB.png");

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 10, "monsterParts", "eye_psycho_dark.png");
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;
        my.sprite.antenna1 = this.add.sprite(this.bodyX + 35, this.bodyY - 85, "monsterParts", "detail_white_antenna_small.png");
        my.sprite.antenna2 = this.add.sprite(this.bodyX - 35, this.bodyY - 85, "monsterParts", "detail_dark_antenna_small.png");
        my.sprite.antenna2.flipX = true;

        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');

        this.input.keyboard.on("keydown-S", (event) =>
        {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        });

        this.input.keyboard.on("keydown-F", (event) => 
        {
            my.sprite.fangs.visible = true;
            my.sprite.mouth.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown)
        {
            for (let part in my.sprite)
            {
                my.sprite[part].x -= 1;
            }
        }

        if (this.dKey.isDown)
        {
            for (let part in my.sprite)
            {
                my.sprite[part].x += 1;
            }
        }
    }
}
// TODO
game.PlayerEntity = me.Entity.extend({
    init:function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
                image:"mario",
                spritewidth: "128",
                spriteheight:"128",
                width: 128,
                height: 128,
                getShape:function(){
                    return(new me.Rect(0, 0, 128, 128)).toPolygon();
                }
        }]);
    this.renderable.addAnimation("idle",[3]);
    this.renderable.addAnimation("smallWalk",[8, 9, 10, 11, 12, 13],80);
    
    this.renderable.setCurrentAnimation("idle");
    
    //animations//
//        
//        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.setVelocity(5, 20);
        me.game.viewport.follow(this.pos,me.game.veiwport.AXIS.BOTH);
        
    },
    
update: function(delta) {
        if (me.input.isKeyPressed("right")) {
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(false);
        } else if (me.input.isKeyPressed('left')) {
            this.flipX(true);
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        } else {
            this.body.vel.x = 0;
        }

        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        if (me.input.isKeyPressed('jump')) {
            if (!this.body.jumping && !this.body.falling) {
                this.body.vel.y = -this.body.maxVel.y * me.timer.tick;
                this.body.jumping = true;
            }
        }
    },
    //movement///
    collideHandler: function () {
        
    }
    
});
game.levelTrigger= me.Entity.extend({
    init:function(x, y, settings){
        this._super(me.Entity,'init', [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
        this.level = settings.level;
        this.xSpawn = settings.xSpawn;
        this.ySpawn = settings.ySpawn;
    },
    onCollsion:function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
    }
});
//spawning code//

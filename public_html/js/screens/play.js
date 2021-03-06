game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                
                me.levelDirector.loadLevel("Aaronlevel01");
                
                this.resetPlayer(0, 400);
                
                
                me.input.bindKey(me.input.KEY.RIGHT, "right");
                me.input.bindKey(me.input.KEY.LEFT, 'left');
                me.input.bindKey(me.input.KEY.UP, 'jump');
                me.input.bindKey(me.input.KEY.SPACE, 'jump');
                me.input.bindKey(me.input.KEY.W, 'jump');
                me.input.bindKey(me.input.KEY.A, 'left');
                me.input.bindKey(me.input.KEY.D, 'right');
                  
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},
        //movement right left and jump//


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
                
	},
        resetPlayer: function(x, y){
            var player = me.pool.pull("mario", 0, 420, {});
                me.game.world.addChild(player,5);
                //reset player code //

});
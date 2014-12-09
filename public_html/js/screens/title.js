game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
	var titleImage =( new me.Sprite(0, 0,me.loader.getImage("title-screen")),-10);
        me.game.world.addChild(title-image, 1);
        me.input.bindKey(me.input.KEY.ENTER,"start");
        me.game.world.addChild(new(me.Renderable.extend({
            init: function(){
                this._super(me.renderable, 'init',[520,30, me.game.viewport.width, me.game.viewport.height]);
                this.font = new me.font("Arial", 46,"purple");
            },
            draw: function(renderer){
                this.font.draw(renderer. getContext(),"Mario-like",450, 130);
                this.font.draw(renderer. getContext(),"Press ENTER To Play",250, 530);
            },
        })));
        
        
        this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge){
            if(action === "start"){
                me.state.change(me.state.PLAY);
            }
        });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ENTER);
                me.event.unsubscribe(this.handler);
	}
});

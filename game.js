(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    var Game = Asteroids.Game = function(ctx) {
        this.ctx = ctx;
        this.asteroids = [];
    }
    
    Game.DIM_X = 300;
    Game.DIM_Y = 200;
    Game.FPS = 300;
    
    Game.prototype.addAsteroids = function(numAsteroids) {
        for(var x = 0; x < numAsteroids; x++){
            this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y))
        }
    }
    
    Game.prototype.draw = function() {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        for(var i = 0; i < this.asteroids.length; i++){
            this.asteroids[i].draw(this.ctx);
        }
    }
    

})(this);
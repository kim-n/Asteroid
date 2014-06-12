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
    
 
})(this);

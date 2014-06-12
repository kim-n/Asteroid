(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    Function.prototype.inherits = function(BaseClass) {
        function Surrogate() {};
        Surrogate.prototype = BaseClass.prototype;
        this.prototype = new Surrogate()
    }
    
    var Asteroid = Asteroids.Asteroid = function(pos, vel){
        Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR)
    }
    
    Asteroid.inherits(Asteroids.MovingObject)

    Asteroid.COLOR = "blue";
    Asteroid.RADIUS = 20;
    
    var randomPosition = function(xMax, yMax){
        return [Math.floor(Math.random() * xMax),
                Math.floor(Math.random() * yMax)]
    }
    
    var randomVelocity = function(xMax, yMax){
        return [Math.floor(Math.random() * 2 * xMax) - xMax,
                Math.floor(Math.random() * 2 * yMax) - yMax]
    }
    
    Asteroid.randomAsteroid = function(dimX, dimY) {
        var pos = randomPosition(dimX, dimY);
        var vel = randomVelocity(dimX/10, dimY/10);
        return new Asteroid(pos, vel);
    }
    
})(this);
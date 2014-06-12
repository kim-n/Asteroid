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
    
})(this);
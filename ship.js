(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    
    var Ship = Asteroids.Ship = function(pos, vel){
        Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR)
    }
    
    Ship.inherits(Asteroids.MovingObject)
    
    Ship.RADIUS = 10;
    Ship.COLOR = 'green';
    
})(this);

console.log("ship.js loaded")
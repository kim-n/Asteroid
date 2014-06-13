(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    
    var Ship = Asteroids.Ship = function(pos, vel){
        Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR)
    }
    
    Ship.inherits(Asteroids.MovingObject)
    
    Ship.RADIUS = 10;
    Ship.COLOR = 'green';
    Ship.MAX_SPEED = 10;
    
    Ship.prototype.power = function(impulse) {  // impulse => [x,y]
        var dx = this.vel[0] + impulse[0];
        var dy = this.vel[1] + impulse[1];
        console.log(dx, Ship.MAX_SPEED, dx > 0 - Ship.MAX_SPEED && dx < Ship.MAX_SPEED);
        if (dx > 0 - Ship.MAX_SPEED && dx < Ship.MAX_SPEED){
            this.vel[0] += impulse[0];
        }        
        if (dy > 0 - Ship.MAX_SPEED && dy < Ship.MAX_SPEED){
            this.vel[1] += impulse[1];
        }
        console.log(this.vel);
    }
    
})(this);

console.log("ship.js loaded")
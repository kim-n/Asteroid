(function(root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    
    var Bullet = Asteroids.Bullet = function(pos, vel) {
        Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR)
    }
    
    Bullet.inherits(Asteroids.MovingObject);
    
    Bullet.RADIUS = 2;
    Bullet.COLOR = 'yellow';
    Bullet.VELOCITY = 15;
    
    Bullet.prototype.hitAsteroids = function(asteroids) {
        var hits = [];
        for(var i = 0; i < asteroids.length; i++){
            if(this.isCollidedWith(asteroids[i])){
                hits.push(i);
            };
        };
        return hits;
    }
    
})(this);
(function(root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    
    var Bullet = Asteroids.Bullet = function(pos, vel) {
        Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR)
    }
    
    Bullet.inherits(Asteroids.MovingObject);
    
    Bullet.RADIUS = 3;
    Bullet.COLOR = 'black';
    Bullet.VELOCITY = 30;
    
    Bullet.prototype.hitAsteroids = function(asteroids) {
        var hits = [];
        for(var i = 0; i < asteroids.length; i++){
            if(this.isCollidedWith(asteroids[i])){
                hits.push(i);
            };
        };
        return hits;
    }
    
    Bullet.prototype.draw = function(ctx) {
        ctx.strokeStyle = this.color ;
        ctx.beginPath();

        var x = this.pos[0];
        var y = this.pos[1];
        
        
                        

        ctx.beginPath();
        ctx.moveTo(x+this.radius, y-this.radius);
        ctx.lineTo(x,y+this.radius);
        ctx.lineTo(x - this.radius , y - this.radius);
        ctx.closePath();
        ctx.stroke();
        
        
        ctx.fillStyle = "#FFCC00";
        ctx.fill();
    }
    
})(this);

console.log("ship.js loaded")
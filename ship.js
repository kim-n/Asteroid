(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {})
    
    var Ship = Asteroids.Ship = function(pos, vel){
        Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
        this.angle = 0;
    }
    
    Ship.inherits(Asteroids.MovingObject)
    
    Ship.RADIUS = 10;
    Ship.COLOR = 'green';
    Ship.MAX_SPEED = 20;
    
    Ship.prototype.power = function(impulse) {  // impulse => [x,y]
        var dx = this.vel[0] + impulse[0];
        var dy = this.vel[1] + impulse[1];
        // console.log(dx, Ship.MAX_SPEED, dx > 0 - Ship.MAX_SPEED && dx < Ship.MAX_SPEED);
        if (dx > 0 - Ship.MAX_SPEED && dx < Ship.MAX_SPEED){
            this.vel[0] += impulse[0];
        }        
        if (dy > 0 - Ship.MAX_SPEED && dy < Ship.MAX_SPEED){
            this.vel[1] += impulse[1];
        }
        console.log(this.vel);
    }
    
    Ship.prototype.fireBullet = function(){
        var speed = Math.sqrt(Math.pow(this.vel[0],2) + Math.pow(this.vel[1],2));

        if (speed != 0) {
          var vel = [];
          vel[0] =  Asteroids.Bullet.VELOCITY * (this.vel[0] / speed);
          vel[1] =  Asteroids.Bullet.VELOCITY * (this.vel[1] / speed);
          return new Asteroids.Bullet([this.pos[0], this.pos[1]], vel)
        }
    }
    
    Ship.prototype.move = function() {
        var x = this.pos[0];
        var y = this.pos[1];
        var dimX = Asteroids.Game.DIM_X;
        var dimY = Asteroids.Game.DIM_Y;
        
        if (x <= (0 - this.radius) || x >= (dimX + this.radius)) {
          this.pos[0] = dimX - x;
        }
        if (y <= (0 - this.radius) || y >= (dimY + this.radius)) {
          this.pos[1] = dimY - y;
        }
        
        this.pos[0] += this.vel[0] * Math.sin(this.angle * Math.PI / 180)  // update x pos
        this.pos[1] += this.vel[1] * Math.cos(this.angle * Math.PI / 180) // update y pos
    }
    
    Ship.prototype.rotate = function(dx) {
        this.angle = (this.angle + dx) % 360;
        console.log(this.angle)
    }
    
    Ship.prototype.draw = function(ctx) {
        ctx.strokeStyle = this.color ;
        ctx.beginPath();
        // (x, y, radius, start[RADIANS], end[RADIANS], clockwise?)

        x = this.pos[0];
        y = this.pos[1];
                        
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        );
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x - this.radius * Math.sin((this.angle) * Math.PI / 180) , y - this.radius * Math.cos((this.angle) * Math.PI / 180));
        ctx.stroke();
    }
})(this);

console.log("ship.js loaded")
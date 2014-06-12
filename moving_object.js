(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
        this.pos = pos;  // Array [x,y]
        this.vel = vel;  // Array [x,y]
        this.radius = radius;
        this.color = color;
    }

    MovingObject.prototype.move = function() {
        this.pos[0] += this.vel[0]  // update x pos
        this.pos[1] += this.vel[1]  // update y pos
    }

    MovingObject.prototype.draw = function(ctx) {
        ctx.beginPath();
        // (x, y, radius, start[RADIANS], end[RADIANS], clockwise?)
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI,
            false
        );
        ctx.strokeStyle = this.color ;
        ctx.stroke();
    }


    var distance = function(objA, objB){
        return Math.sqrt(Math.pow(objA[0]-objB[0],2) + Math.pow(objA[1]-objB[1],2));
    }

    MovingObject.prototype.isCollidedWith = function(otherObject) {
        var dist = distance(this.pos, otherObject.pos);
        var radiiSum = this.radius + otherObject.radius;
        return radiiSum > dist;
    }
})(this);

console.log("moving_objects.js loaded")

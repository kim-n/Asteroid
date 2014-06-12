"use strict"

var MovingObject = function(pos, vel) {
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
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

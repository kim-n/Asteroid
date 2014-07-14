(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    var Asteroid = Asteroids.Asteroid = function(pos, vel, radius){
        if(typeof(radius)==='undefined') radius=Asteroid.RADIUS;
        Asteroids.MovingObject.call(this, pos, vel, radius, Asteroid.COLOR)
    }
    
    Asteroid.inherits(Asteroids.MovingObject)

    Asteroid.COLOR = "#00CCCC";
    Asteroid.RADIUS = 40;
    Asteroids.MAX_SPEED = 10;
    
    var randomPosition = function(xMax, yMax) {
      var rand = Math.floor(Math.random() * 4);
      var x = Math.floor(Math.random() * xMax)
      var y = Math.floor(Math.random() * yMax)
      
      switch(rand) {
      case 0:
          return [0, y];
      case 1:
          return [xMax, y];
      case 2:
          return [x, 0];
      case 3:
          return [x, yMax];
      }
    }
    
    var randomVelocity = function(xMax, yMax){
        return [Math.floor(Math.random() * 2 * xMax) - xMax,
                Math.floor(Math.random() * 2 * yMax) - yMax]
    }
    
    Asteroid.randomAsteroid = function(dimX, dimY) {
        var pos = randomPosition(dimX, dimY);
        var vel = randomVelocity(Asteroids.MAX_SPEED, Asteroids.MAX_SPEED);        
        return new Asteroid(pos, vel);
    }
    
    Asteroid.prototype.draw = function(ctx) {
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
        
        ctx.strokeStyle = "#66CC99";
        ctx.stroke();
        
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    


})(this);

console.log("asteroid.js loaded")

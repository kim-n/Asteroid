(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    var Game = Asteroids.Game = function(ctx) {
        this.ctx = ctx;
        this.asteroids = [];
        this.ship = new Asteroids.Ship([Game.DIM_X/2,Game.DIM_Y/2], [0,0]);
        this.bullets = [];
        this.currentInterval;
        this.score = 0;
    }
    
    Game.DIM_X = 600;
    Game.DIM_Y = 400;
    Game.FPS = 100;
    
    Game.prototype.addAsteroids = function(numAsteroids) {
        for(var x = 0; x < numAsteroids; x++){
            this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y))
        }
    }
    
    Game.prototype.draw = function() {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y + 10);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
        


        for(var i = 0; i < this.asteroids.length; i++){
            this.asteroids[i].draw(this.ctx);
        }
        this.ship.draw(this.ctx);
        for(var i = 0; i < this.bullets.length; i++){
            this.bullets[i].draw(this.ctx);
        }
        
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, Game.DIM_Y, Game.DIM_X, Game.DIM_Y + 30);
        
        this.ctx.font = "20px Georgia";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Points: ", 0, Game.DIM_Y + 20);
        this.ctx.fillText(1000 - (100 * this.asteroids.length) , 90, Game.DIM_Y + 20);
        this.ctx.fillText("Asteroids left: ", 400, Game.DIM_Y + 20);
        this.ctx.fillText(this.asteroids.length, 550, Game.DIM_Y + 20);
        
    }
    
    Game.prototype.move = function() {
        for(var i = 0; i < this.asteroids.length; i++){
            this.asteroids[i].move();
        }
        this.ship.move();
        for(var i = this.bullets.length -1 ; i >= 0; i--){
            this.bullets[i].move();
            if(this.bullets[i].isExitCanvas()){
                this.removeBullet(i);
            }
        }
    }
    
    Game.prototype.step = function() {
        this.checkWon();
        this.move();
        this.draw();
        this.removeAsteroids();
        this.checkCollisions();
    }
    
    Game.prototype.start = function() {
        var that = this;
        var dx = 3;
        key('up, down, right, left, space', function(event, handler){
             if(key.isPressed('up')) {that.ship.power([0,0-dx])};
             if(key.isPressed('down')) {that.ship.power([0,dx])};
             if(key.isPressed('right')) {that.ship.power([dx,0])};
             if(key.isPressed('left')) {that.ship.power([0-dx,0])};
             if(key.isPressed('space')) {that.fireBullet()};
         });

        this.addAsteroids(10);
        this.currentInterval = setInterval(this.step.bind(this), Game.FPS);
    }
    
    Game.prototype.stop = function(message) {
        alert(message);
        clearInterval(this.currentInterval);
    }
    
    Game.prototype.checkCollisions = function() {
        for(var i=0; i< this.asteroids.length; i++){
            if(this.ship.isCollidedWith(this.asteroids[i])){
                this.stop("GAME LOST!");
            }
        }
    }
    
    Game.prototype.checkWon = function() {
        if(this.asteroids.length === 0){
            this.stop("GAME WON!!!");
        }
    }
    
    Game.prototype.fireBullet = function() {
        var bullet = this.ship.fireBullet();
        
        if(bullet){
            this.bullets.push(bullet);
        }
    }
    
    Game.prototype.removeBullet = function(pos){
        this.bullets.splice(pos,1)
    }
    
    Game.prototype.removeAsteroids = function() {
      for (var b=this.bullets.length-1; b >=0 ; b--) {
       var hitAsteroids = this.bullets[b].hitAsteroids(this.asteroids);
       if (hitAsteroids.length > 0) {
         for (var a= hitAsteroids.length-1; a >=0 ; a--) {
           this.asteroids.splice(hitAsteroids[a], 1);
         }
         this.bullets.splice(b, 1);
       }
      }
    }
})(this);

console.log("game.js loaded")

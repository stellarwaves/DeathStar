'use strict'

class Player {
   constructor(canvas,w, laser_image_url="img/player/laser/laserRed.png"){
      this.size = 60;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.laser_image = new Image();
		this.laser_image.src = laser_image_url;
      this.x = this.canvas.width/2;
      this.y = this.canvas.height - this.size;
      this.w = w;
      this.speed = 4;
      this.direction = 0;
      this.lives = 3;
      this.img = new Image();
      this.lasers = [];
   };

   update() {
      this.x = this.x + this.direction * this.speed;
   };
   
   draw(){
      //(x, y, width, height)
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(this.x - this.size/2, this.y - this.size/2 , this.size, this.size)
   };

   //checklimits of the spaceship
   checkScreenLimit(){
      if(this.x - this.size / 2 <= 0){
         this.direction = 1;  
      } else if (this.x + this.size / 2 >= this.canvas.width){
         this.direction = -1; 
      }
   }

   setDirection(direction){
      this.direction = direction;
   };

   checkColitionEnemy(enemy){
      const collideRight = this.x + this.size / 2 > enemy.x - enemy.size/ 2; 
      const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size/2;
      const collideTop = this.y - this.size / 2 < enemy.y + enemy.size/2;
      const collideBottom = this.y + this.size / 2 > enemy.y - enemy.size/2;

      if(collideRight && collideLeft && collideTop && collideBottom){
         return true;
      }
      return false;
   }

   shoot(){
      //this.shoot_audio.currentTime = 0;
		var middle = this.x + this.w - (this.w / 2) - 5;
		this.lasers.push({"x":middle,"y":this.y - 25,"w":10,"h":30,"x_speed":0,"y_speed":1000});
   }

   loseLive() {
      this.lives--;
   }
   
};
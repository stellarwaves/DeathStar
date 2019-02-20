'use strict'

class Player {
   constructor(canvas){
      this.size = 69;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.player_image = new Image();
      this.player_image.src = "img/player/millenniun.png";
      this.x = this.canvas.width/2;
      this.y = this.canvas.height - 69;
      this.speed = 4;
      this.direction = 0;
      this.lives = 1;
   };

   update() {
      this.x = this.x + this.direction * this.speed;
   };
   
   draw(){
      //(x, y, width, height)
      this.ctx.drawImage(this.player_image,this.x - 69/2, this.y - 50, 69, 91);
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
      //(x, y, width, height)
      const newLaser =  new Laser(this.canvas, this.x+this.size/2, this.y);  
      newLaser.shoot_audio.currentTime = 0;
      newLaser.shoot_audio.play(); 
      return newLaser;
   }

   loseLive() {
      this.lives--;
   }
   
};
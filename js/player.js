'use strict'

class Player {
   constructor(canvas,w,h, player_image_url="img/player/millenniun.png" ,laser_image_url="img/player/laser/laserRed.png"){
      this.size = 69;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.player_image = new Image();
      this.player_image.src = player_image_url;
      this.laser_image = new Image();
		this.laser_image.src = laser_image_url;
      this.x = this.canvas.width/2;
      this.y = this.canvas.height - 69;
      this.speed = 4;
      this.direction = 0;
      this.lives = 3;
      this.lasers = [];
   };

   update() {
      this.x = this.x + this.direction * this.speed;
   };
   
   draw(){
      //(x, y, width, height)
      this.ctx.drawImage(this.player_image,this.x - 69/2, this.y - 50, 69, 91);
      for (var i in this.lasers){
         var laser = this.lasers[i];

         if (this.lasers[i].y < 0){
            this.lasers.splice(i,1);
         }
         if (this.lasers[i]){
            this.ctx.drawImage(this.laser_image,this.x - 9, this.y - 80, 17, 31);
            // this.lasers[i].x -= laser.x_speed * this.direction;
            // this.lasers[i].y -= laser.y_speed * this.direction;
         }
      }
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
		var middle = this.x + this.w - (this.w / 2) - 5;
		this.lasers.push({"x":middle,"y":this.y - 25,"w":17,"h":31,"x_speed":0,"y_speed":1000});
   }

   loseLive() {
      this.lives--;
   }
   
};
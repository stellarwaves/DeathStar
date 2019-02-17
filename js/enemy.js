'use strict'

class Enemy {
   constructor (canvas, x, enemy_image_url="img/player/Asteroid.png"){
      this.size = 30;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.enemy_image = new Image();
      this.enemy_image.src = enemy_image_url;
      this.x = x;
      this.y = 0;
      this.speed = 4;
      this.direction = 1;
   }

   update() {
      this.y = this.y + this.direction * this.speed;
   };

   draw() {
      this.ctx.drawImage(this.enemy_image, this.x, this.y, 50, 50);
   }
}
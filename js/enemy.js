'use strict'

class Enemy {
   constructor (canvas, x, image, speed){
      this.size = 50;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.enemy_image = image;
      this.x = x;
      this.y = 0;
      this.speed = speed;
      this.direction = 1;
   }

   update() {
      this.y = this.y + this.direction * this.speed;
   };

   draw() {
      this.ctx.drawImage(this.enemy_image, this.x, this.y, this.size, this.size);
   }
}

'use strict'

class Enemy {
   constructor (canvas, x){
      this.size = 30;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d')
      this.x = x;
      this.y = 0;
      this.speed = 4;
      this.direction = 1;
   }

   update() {
      this.y = this.y + this.direction * this.speed;
   };

   draw() {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(this.x, this.y, this.size, this.size)
   }
}
class Laser {
   constructor(canvas, x, y){
      this.canvas = canvas;
      this.size = 30;
      this.ctx = this.canvas.getContext('2d')
      this.laser_image = new Image();
		this.laser_image.src = "img/player/laser/laserRed.png";
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.direction = -1;
   };

   update() {
      this.y = this.y + this.direction * this.speed;
   };

   draw() {
      //(x, y, width, height)
      this.ctx.drawImage(this.laser_image, this.x - 43, this.y - 60 , 17, 31);
   }

   checkColitionLaser(enemy){
      const collideRight = this.x + this.size / 2 >= enemy.x - enemy.size/ 2; 
      const collideLeft = this.x - this.size / 2 <= enemy.x + enemy.size/2;
      const collideTop = this.y - this.size / 2 <= enemy.y + enemy.size/2;
      const collideBottom = this.y + this.size / 2 >= enemy.y - enemy.size/2;

      if(collideRight && collideLeft && collideTop && collideBottom){
         return true;
      }
      return false;
   }
};
class Laser {
   constructor(canvas, x, y){
      this.canvas = canvas;
      this.size = 30;
      this.ctx = this.canvas.getContext('2d')
      this.laser_image = new Image();
      this.laser_image.src = "img/player/laser/laserRed.png";
      this.shoot_audio = new Audio("audio/TIE_fighter_fire1.mp3");
      this.x = x - 43;
      this.y = y - 60;
      this.speed = 10;
      this.direction = -1;
   };

   update() {
      this.y = this.y + this.direction * this.speed;
   };

   draw() {
      //(x, y, width, height)
      this.ctx.drawImage(this.laser_image, this.x, this.y - 40 , 17, 31);
   }

   checkColitionLaser(enemy){
      const collideRight = this.x + 17 > enemy.x; 
      const collideLeft = this.x <= enemy.x + enemy.size;
      const collideTop = this.y - 80 <= enemy.y;
      const collideBottom = this.y + 31 >= enemy.y - enemy.size;

      if(collideRight && collideLeft && collideTop && collideBottom){
         return true;
      }
      return false;
   }
};
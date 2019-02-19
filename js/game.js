'use stict'

class Game {
   constructor(canvas){
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.player;
      this.enemies = [];
      this.lasers = [];
      this.explotion = [];
      this.isGameOver = false;
      this.score = 0;
   }

   startLoop () {
      this.player = new Player(this.canvas, 1);

      const loop = () => {
         if(Math.random() > 0.95) {
            const x = Math.random() * this.canvas.width;
            this.enemies.push(new Enemy(this.canvas, x))
         }

         this.checkAllCollitions();
         //update
         this.updateCanvas();
         //clear
         this.clearCanvas();
         //draw
         this.drawCanvas();

         if(!this.isGameOver){
            window.requestAnimationFrame(loop);
         }
      }
      window.requestAnimationFrame(loop);
   }; 

   updateCanvas(){
      this.player.checkScreenLimit();
      this.player.update();
      this.enemies.forEach((enemy) => {
         enemy.update();
      });
      
      this.lasers.forEach((laser) => {
         laser.update();
      })
   };

   clearCanvas(){
      this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   };

   drawCanvas(){
      this.player.draw();

      this.lasers.forEach((laser) => {
         laser.draw();
      })
      
      this.enemies.forEach((enemy) => {
         enemy.draw();
      });

   };

   gameOverCallback(callback) {
      this.onGameOver = callback;
   }

   checkAllCollitions() {
      this.player.checkScreenLimit();
      this.enemies.forEach((enemy, index) => {
         if(this.player.checkColitionEnemy(enemy)){
            console.log('dead')
            this.player.loseLive();
            this.enemies.splice(index, 1);
            if(this.player.lives === 0) {
               this.isGameOver = true;
               this.onGameOver();
            }
         }
      });
      this.enemies.forEach((enemy) => {
         this.lasers.forEach((laser) => {
            if(laser.checkColitionLaser(enemy)){
               console.log('dead enemy');
               this.enemies.splice(this.enemies.indexOf(enemy), 1);
               this.lasers.splice(this.lasers.indexOf(laser), 1);
               //this.explotion.push(New Explotion(this.canvas,laser.x,laser.y));
               this.score += 1;
            }
         });
      });
   };

   gameOverCallback(callback) {
      this.onGameOver = callback;
   }

};

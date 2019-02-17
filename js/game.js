'use stict'

class Game {
   constructor(canvas){
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.player;
      this.enemies = [];
      this.isGameOver = false;
   }

   startLoop () {
      this.player = new Player(this.canvas, 1);

      const loop = () => {
         if(Math.random() > 0.97) {
            const y = Math.random() * this.canvas.height;
            this.enemies.push(new Enemy(this.canvas, y))
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
   };

   clearCanvas(){
      this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
   };

   drawCanvas(){
      this.player.draw();
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
   };

   gameOverCallback(callback) {
      this.onGameOver = callback;
   }

};

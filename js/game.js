'use stict'

class Game {
   constructor(canvas){
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.player;
      this.enemies = [];
      this.isGameOver = false;
   }
}
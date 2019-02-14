'use strict'
const main = () => {

   const buildDom = (html) => {
      const main = document.querySelector('main');
      main.innerHTML = html;
   };

   const buildSplashScreen = () => {
      const splashScreen= buildDom(
         `<section class="splash-screen">
            <h1>Start game</h1>
            <button>Start</button>
         </section>`
      )

      const startButton = document.querySelector('button');
      startButton.addEventListener('click', buildGameScreen);
   }

   const buildGameScreen = () => {
      const gameScreen = buildDom(
         `  <section class="game-screen">
               <h1>Game</h1>
               <canvas></canvas>
            </section>
         `
      )

      setTimeout(buildGameOverScreen, 500);
   }

   const buildGameOverScreen = () => {
      const gameOverScreen = buildDom(
         `  <section class="end-screen">
               <h1>End Game</h1>
               <button id="back">Back to splash</button>
               <button id="play">Play Again</button>
            </section>
         `
      )
      
      const backButton = document.getElementById('back');
      backButton.addEventListener('click', buildSplashScreen);

      const playButton = document.getElementById('play');
      playButton.addEventListener('click', buildGameScreen);
   }

   buildSplashScreen();

};

window.addEventListener('load', main);
//Fuerza a cargar el script 

const main = () => {

   const buildDom = (html) => {
      const main = document.querySelector('main');
      main.innerHTML = html;
   };

   const buildSplashScreen = () => {
      const splashScreen = buildDom (`
         <section class="splash-screen">
            <h1>Start game</h1>
            <button>Start</button>
         </section>
      `)

      const startButton = document.querySelector('button');
      startButton.addEventListener('click', buildGameScreen);
   };

   const buildGameScreen = () => {
      const gameScreen = buildDom ( `  
         <section class="game-screen">
            <canvas></canvas>
         </section>
      ` )

      const width = document.querySelector('.game-screen').offsetWidth;
      const height = document.querySelector('.game-screen').offsetHeight;
      
      const canvasElement = document.querySelector('canvas');
   
      canvasElement.setAttribute('width', width);
      canvasElement.setAttribute('height', height);

      //setTimeout(buildGameOverScreen, 500);

      const game = new Game(canvasElement);
      game.gameOverCallback(buildGameOverScreen);
      
      game.startLoop();


      const setPlayerDirection = (event) => {
         if(event.code === 'ArrowLeft'){
            game.player.setDirection(-1);
            console.log('Left')
         } else if(event.code === 'ArrowRight'){
            game.player.setDirection(1);
            console.log('Right')
         };
         if (event.code === 'ArrowUp') {
            game.player.shoot();
            console.log('shoot')
			}
      };

      document.addEventListener('keydown', setPlayerDirection);

   };


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
   };

   buildSplashScreen();

};

window.addEventListener('load', main);
//Fuerza a cargar el script 
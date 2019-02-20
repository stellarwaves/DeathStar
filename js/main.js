
const main = () => {

   const buildDom = (html) => {
      const main = document.querySelector('main');
      main.innerHTML = html;
   };

   const buildSplashScreen = () => { 
      const splashScreen = buildDom (`
         <section class="splash-screen splash">
            <div class="splash-content">
               <div id='stars'></div>
               <div id='stars2'></div>
               <div id='stars3'></div>
               <img src="./img/ui/millennium-falcon-smugglers-run-logo.jpg">
               <button class="btn">Start</button>
               <p>Controls: Arrows left and right to move, arrow up to fire.</p>
               <audio controls autoplay loop>
                  <source src="./audio/the-adventures-of-han.mp3" type="audio/mpeg">
               </audio>
            </div>
         </section>
      `)

      const startButton = document.querySelector('button');
      startButton.addEventListener('click', buildGameScreen);
   };


   const buildGameScreen = () => {
      const gameScreen = buildDom ( `  
         <section class="game-screen game">
            <p id="score"></p>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <canvas></canvas>
            <audio controls autoplay loop>
               <source src="./audio/flying-with-chewie.mp3" type="audio/mpeg">
            </audio>
         </section>
      ` )

      const width = document.querySelector('.game-screen').offsetWidth;
      const height = document.querySelector('.game-screen').offsetHeight;
      
      const canvasElement = document.querySelector('canvas');

      const score = document.getElementById('score');
      score.innerHTML = 

   
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
            console.log('shoot');
            game.lasers.push(game.player.shoot());
         }
      };

      document.addEventListener('keydown', setPlayerDirection);

   };


   const buildGameOverScreen = () => {
      const gameOverScreen = buildDom(
         `  <section class="end-screen">
               <div class="end-content">
               <div id='stars'></div>
               <div id='stars2'></div>
               <div id='stars3'></div>
                  <h1>GAME OVER</h1>
                  <p>"Remember, the Force will be with you…always." – Obi-Wan Kenobi</p>
                  <ul>
                     <li><button class="btn" id="play">Play Again</button></li>
                     <li><button class="btn" id="back">Back to splash</button></li>
                  </ul>
               </div>
               <audio controls autoplay loop>
                  <source src="./audio/good-thing-you-were-listening.mp3" type="audio/mpeg">
               </audio>
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
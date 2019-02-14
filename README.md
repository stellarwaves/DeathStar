# Death Star

## Descripción
Mini descripción del proyecto.

El player deberá defender el imperio impidiendo que naves de la resistencia y asteroides lleguen a la estrella de la muerte.

## MVP - Tecnología (DOM - CANVAS)
Definición del MVP.

El jugador deberá impedir colisiones destruyendo enemigos dirigidos a su posición (centro del canvas).  

## Backlog
- Asteroides 
- Fragmentación de asteroides
- Energía del player
- Campo de fuerza del player
- Ranking 

## Estructuras de Datos

Definicion de clases y métodos.

class PLayer {
-   this.canvas
-   this.lives
-   this.rotation
-   this.speed
-   this.size
-   this.ctx
- 
-   draw()
-   update()
-   checkColitionEnemy()
-   loseLive()
- }

class Enemie1{
-   this.canvas
-   this.lives
-   this.x
-   this.y
-   this.speed
-   this.size
-   this.ctx
- 
-   draw()
-   update()
-   checkColitionEnemy()
-   checkColitionBullet()
- }

class Enemie2 extends Enemie1{}

class Bullet{
-   this.canvas
-   this.x
-   this.y
-   this.color
-   this.colition
-   this.speed
-   this.size
-   this.ctx
- 
-   draw()
-   update()
-   checkColitionEnemy()
- }

class Game{
-   this.canvas
-   this.ctx
-   this.player
-   this.enemies
-   this.isGameOver
- 
-   startLoop()
-   updateCanvas()
-   clearCanvas()
-   checkAllCollitions()
-   gameOverCallback()
- }

## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
- gameScreen
- gameoverScreen

funciones de transicion.

- buildDom()
- buildSplashScreen()
- buidGameScreen()


## Task

Definicion de las tareas por orden de prioridad

- Crear repositorio y ficheros (player.js, enemy.js, game.js, index.html, style.css).
- Layouts e interacciones. 
- Crear game.
- Crear loop.
- Loop testing.
- Crear player.
- Pintar player en canvas.
- Rotation del player.
- Crear enemies / Mover enemies.
- Random de enemies.
- Colisión de enemies con player.
- Crear bullet.
- Pintar bullet en canvas / Trayectoria de bullet.
- Colisión de bullet con enemies (viceversa).

## Links

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](https://github.com/stellarwaves/DeathStar.git)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones

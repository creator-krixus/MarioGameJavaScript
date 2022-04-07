const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
// Modifica el tamaño del canvas para que ocupe toda la pantalla
canvas.width = innerWidth
canvas.height = innerHeight
console.log(c)
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.width = 30
        this.height = 30
    }
    draw(){
        //  El estilo de relleno se determina por el atributo fillStyle.
        c.fillStyle = 'red'
        /* El método CanvasRenderingContext2D.fillRect()  de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ). El tamaño del rectángulo se determina por width (anchura) y height (altura) */
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const player = new Player()
player.draw()
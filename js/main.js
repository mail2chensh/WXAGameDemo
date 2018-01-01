import BackGround from './runtime/background'


let ctx = canvas.getContext('2d')


export default class Main {

  constructor() {
    this.restart()
  }

  restart() {
    //
    this.bg = new BackGround(ctx)
    //
    window.requestAnimationFrame(this.loop.bind(this), canvas)
  }

  loop() {
    //
    this.update()
    //
    this.render()
    //
    window.requestAnimationFrame(this.loop.bind(this), canvas)
  }

  render() {
    //
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //
    this.bg.render(ctx)
  }

  update() {
    this.bg.update()
  }

  


}
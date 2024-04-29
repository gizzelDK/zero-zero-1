class Chart{
	constructor( resultArry, canvas){
      this.canvas = canvas
      this.canvas.height = 600
      this.canvas.width = 800
		this.ctx = canvas.getContext('2d')
      this.#drawGrid(resultArry, this.canvas, {x:0, y:0})
	}
	
   #drawGrid(dataPoints, canvas, margin){
      this.ctx.clearRect(0,0, canvas.width , canvas.height);
      const cellsWidth = Math.floor(canvas.width/ dataPoints.length)
      for(var i = 0; i < dataPoints.length +1; i++){
         this.ctx.lineWidth = 1
         this.ctx.strokeStyle = 'red'
         this.ctx.beginPath()
         let x = 0
         if (i > dataPoints.length) {
            x = Math.floor(((i * cellsWidth)- margin.x))
         }else{
            x = Math.floor(((i * cellsWidth)))
         }
         let y = margin.y
         console.log('x and y', x, y)
         this.ctx.moveTo(x, y)
         y = Math.floor((canvas.height - margin.y))
         console.log('x and y', x, y)
         this.ctx.lineTo(x, y)
         this.ctx.stroke()
         this.ctx.closePath()
         }
         console.log('chart drawn', canvas)
    // linesAcross
    
    // text bottom & text right
    }
}

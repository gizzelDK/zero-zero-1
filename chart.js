class Chart{
	constructor( resultArry, canvas){
      this.canvas = canvas
      this.canvas.height = 600
      this.canvas.width = 800
		this.ctx = canvas.getContext('2d')
      this.#drawGrid(resultArry, this.canvas, {x:40, y:400})
	}
	
   #drawGrid(dataPoints, canvas, margin){
      this.ctx.clearRect(0,0, canvas.width , canvas.height);
      const cellsWidth = Math.floor((canvas.width - margin.x) / dataPoints.length)
      for(var i = 0; i < dataPoints.length -1; i++){
         this.ctx.lineWidth = 5
         this.ctx.strokeStyle = 'red'
         this.ctx.beginPath()
         this.ctx.moveTo(Math.floor((margin.x + (i * cellsWidth))), margin.y)
         this.ctx.lineTo(margin.x, Math.floor((canvas.height - margin)))
         this.ctx.stroke()
         this.ctx.closePath()
         }
         console.log('chart drawn', canvas)
    // linesAcross
    
    // text bottom & text right
    }
}

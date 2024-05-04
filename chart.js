class Chart{
	constructor( resultArry, canvas){
      this.canvas = canvas
      this.canvas.height = 1020
      this.canvas.width = 800
	  this.ctx = canvas.getContext('2d')
      this.#drawGrid(resultArry, {x:0, y:0})
	}
	
   #drawGrid(dataPoints, margin){
   const {ctx, canvas} = this
      ctx.clearRect(0,0, canvas.width , canvas.height)
	  ctx.lineWidth = 1
	      // linesAcross & right side intervals
	  var _text = 1
	  for(let j = 20; j <= 1020; j+= 20){
	  ctx.strokeStyle = 'rgba(80, 80, 80, 0.6)'
		  ctx.beginPath()
		  let x = 0
		  let y = j
		  ctx.moveTo(x, y)
		  ctx.lineTo(canvas.width, y)
		  ctx.stroke()
		  ctx.closePath()
		  // text
		  this.ctx.strokeStyle = 'rgba(80, 80, 80, 1)'
		  ctx.strokeText(`${_text.toFixed(2)}`, (canvas.width - 30), (y - 2))
			  _text -= 0.02
		}
	  // Lines down
      const cellsWidth = Math.floor(canvas.width / dataPoints.length)
	  var currentPoint = {x: 0, y: 0}
	  var previousPoint = {x: 0, y: 0}
      for(let i = 0; i <= dataPoints.length ; i++){
		 ctx.strokeStyle = 'rgba(80, 80, 80, 0.4)'
         ctx.beginPath()
         let x = 0
            x = Math.floor((i * cellsWidth))
         let y = margin.y
         ctx.moveTo(x, y)
         y = Math.floor((canvas.height - margin.y))
         console.log('x and y', x, y)
         ctx.lineTo(x, y)
         ctx.stroke()
         ctx.closePath()
	// dataPoints
		  if(i <= dataPoints.length -1){
			  currentPoint.x = (x + (cellsWidth / 2))
			  currentPoint.y = ( Math.floor((canvas.height - (dataPoints[i] * 1000)- margin.y)))
			  const r_g_b = (255 * dataPoints[i])
			  // circles
			  ctx.beginPath()
				ctx.arc(currentPoint.x, currentPoint.y, 3, 0, 2 * Math.PI)
				ctx.fillStyle = `rgb(255 255 255/ ${Math.floor((dataPoints[i].toFixed(2)*100) )}%)`
				ctx.fill()
				ctx.linewidth = 1
				ctx.strokestyle = 'rgb(r_g_b, r_g_b, r_g_b/ 100%)'
				ctx.stroke()
				ctx.closePath()
				// lines between circles
					ctx.strokestyle = 'rgb(r_g_b, r_g_b, r_g_b)'
					ctx.linewidth = 2
					ctx.beginPath()
					ctx.moveTo(previousPoint.x, previousPoint.y)
					ctx.lineTo(currentPoint.x, currentPoint.y)
					ctx.stroke()
					ctx.closePath()
					previousPoint.x = currentPoint.x
					previousPoint.y = currentPoint.y
         }
    // text bottom
	
	  }
    }
}

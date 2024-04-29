# zero^zero=1
(... or so they say. We'll have to seea bout that)

## graf

```
drawGrid(dataPoints, canvas, margin){
  const cellsWidth = (canvas.width - margin.x) / dataPoints.length
  for(var i = 0; i < dataPoints.length -1; i++){
    ctx.beginPath()
      ctx.moveTo(margen.x + (i * cellsWidth), margin.y)
      ctx.lineTo(margin.x, canvas.height - margin)
      ctx.stroke()
  }
// linesAcross

// text bottom & text right
}
```

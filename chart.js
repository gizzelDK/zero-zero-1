class Chart{
	constructor( resultArry, canvas){
		this.results = resultArry
		this.ctx = canvas.getContext('2d')
		this.dataBounds = this.#getDataBounds()
		this.pixelBounds = this#getPixelBounds()
		this.defaultDataBounds = this.#getDataBounds()
		this.#draw()
	}
	
	#draw(){
      const {ctx,canvas}=this;
      ctx.clearRect(0,0,canvas.width,canvas.height);

      ctx.globalAlpha=this.transparency;
      this.#drawSamples(this.samples);
      ctx.globalAlpha=1;

      if(this.hoveredSample){
         this.#emphasizeSample(
            this.hoveredSample
         );
      }

      if(this.selectedSample){
         this.#emphasizeSample(
            this.selectedSample,"yellow"
         );
      }

      this.#drawAxes();
   }

   selectSample(sample){
      this.selectedSample=sample;
      this.#draw();
   }
	
	#getPixelBounds(){
      const {canvas,margin}=this;
      const bounds={
         left:margin,
         right:canvas.width-margin,
         top:margin,
         bottom:canvas.height-margin
      };
      return bounds;
   }

   #getDataBounds(){
      const {samples}=this;
      const x=samples.map(s=>s.point[0]);
      const y=samples.map(s=>s.point[1]);
      const minX=Math.min(...x);
      const maxX=Math.max(...x);
      const minY=Math.min(...y);
      const maxY=Math.max(...y);
      const bounds={
         left:minX,
         right:maxX,
         top:maxY,
         bottom:minY
      };
      return bounds;
   }
   
   
}

docReady(function() {
	window.form = document.getElementById('base-nums')
    // DOM is loaded and ready for manipulation here
    //const form = window.form
	const chartCanvas = document.getElementById('calc-canvas')
	const resultContainer = document.getElementById('results')
	const resultsArr = []
	window.resultsArr = resultsArr
	
    form.style.background = '#555'
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
		// on resubmit clear results display & array
		while (resultsArr.length)
		{ resultsArr.pop(); }
		resultContainer.innerHTML = ''
        const inputData = new FormData(form)
        for (const pair of inputData.entries()) {
			console.log(pair[0], pair[1]);
			const numVal = (parseFloat(pair[1]) ** parseFloat(pair[1]))
			console.log(numVal)
			//parseFloat(yourString).toFixed(8)
			resultsArr.push(numVal)
			
			const div = document.createElement("div")
			div.innerHTML = numVal.toFixed(8)
			resultContainer.appendChild(div)
		}
		const chart = new Chart(resultsArr, chartCanvas)
    })
})


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  
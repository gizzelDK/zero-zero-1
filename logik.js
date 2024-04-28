docReady(function() {
    // DOM is loaded and ready for manipulation here
    const form = document.getElementById('base-nums')
    form.style.background = '#555'
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        const inputData = new FormData(form)
        for(var i =0; i < inputData.entries.length -1; i++){
            console.log('form element val: ', inputData.entries[i])
        }
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
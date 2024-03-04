function updateClock() {
    // Create a new Date object
    let now = new Date();
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    document.querySelector("#box1").innerHTML="<P>"+padZero(hours)+"</P>"
    document.querySelector("#box2").innerHTML="<P>"+padZero(minutes)+"</p>"
    document.querySelector("#box3").innerHTML='<p>'+padZero(seconds)+'</p>'
}

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
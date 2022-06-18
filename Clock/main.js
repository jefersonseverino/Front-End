var nowTime = document.getElementById('now');

setInterval(() => {
    
    var currentTime = new Date();
    var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

    nowTime.innerHTML = time;

}, 1000)

let count = document.getElementById('count');
let increaseCount = 0;

function tap(){   

    increaseCount++;
    count.innerHTML = increaseCount
}
function stop(){
    increaseCount = 0;
    count.innerHTML = increaseCount;
}
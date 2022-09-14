
document.getElementById("container").style.backgroundImage = "url('img_test.png')";

var count = 0;

document.getElementById("increment-btn").onclick = function increment(){
    count += 1;
    document.getElementById("count-el").innerHTML = count;
};

document.getElementById("decrement-btn").onclick = function decrement(){
    count -= 1;
    document.getElementById("count-el").innerHTML = count;
};

document.getElementById("reset-btn").onclick = function reset(){
    count = 0;
    document.getElementById("count-el").innerHTML = count;
};
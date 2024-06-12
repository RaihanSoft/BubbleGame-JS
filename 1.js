var timer = 30;
var score = 0;
var hitrn = 0;

function IncreaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

function MakeBubble(){
    var clutter = "";
for(var i = 1; i<=168; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbt").innerHTML  = clutter
}

function runTimer(){
    var timerint =  setInterval(function(){
        if(timer>0){
        timer--;
  document.querySelector("#timer").textContent = timer;
}
else{
    clearInterval(timerint);
    document.querySelector(".pbt").innerHTML = `<h1>Game Over</h1>`;
}
    },1000)
}

function gethit(){
hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn

}

document.querySelector(".pbt")
.addEventListener("click", function(dets){
  var num = Number(dets.target.textContent);

  if(num === hitrn){
    IncreaseScore();
    MakeBubble();
    gethit();
  }


});

runTimer();
MakeBubble();
gethit();

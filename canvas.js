var button = document.getElementById("b"); 
var c = document.getElementById("#main-canvas");

var getrekt = function(e){
    var x = e.clientX;
    var y = e.clientY;
    var ctx = c.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x - 75/2,y - 100,75,100);
};

// c.addEventListener("click", getrekt);

button.addEventListener("click", function(){
    var ctx = c.getContext('2d');
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);  
});

var dots = function(e){
//    console.log("!!!!!!!!!!");
    var x = e.clientX-10;
    var y = e.clientY-80;
    var ctx = c.getContext('2d');
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fill();
    ctx.moveTo(x,y);
    ctx.stroke();
};


c.addEventListener("click", dots);
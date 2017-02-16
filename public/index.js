var app = function(){
  var canvas = document.querySelector('#main-canvas')
  console.log('canvas --- > ', canvas);
  var context = canvas.getContext('2d');
  console.log('canvas context --- > ', context);

  context.fillStyle = 'red';
  context.fillRect(10,10,50,50);

  context.fillStyle = 'blue';
  context.fillRect(10,109,50,50);

  context.strokeStyle = "dodgerblue";
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 200);
  context.stroke();


  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(200, 300);
  context.lineTo(100, 300);
  context.closePath();
  context.stroke();

  context.strokeStyle = "red";
  context.beginPath();
  context.arc(200, 150, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.stroke();

  var drawCircle = function(x,y,r){
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();

  }

  canvas.onclick = function(event){
    console.log('event---' , event);
    drawCircle(event.x, event.y, 70);

  }

  var img = document.createElement('img');
  img.src ="http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";

  var drawDoge = function(){
    context.drawImage(img, 200, 200, 90, 90);

  }
  img.onload = drawDoge;

  var changeColor = function(){
    context.strokeStyle = this.value;
  }

  var colorPicker = document.querySelector('#input-color');
  colorPicker.onchange = changeColor;
}

window.onload = app;
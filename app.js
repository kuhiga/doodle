var canvas = document.getElementById("canvas");
var toolBar = document.getElementById("toolBar");
var canvas1 = canvas.getContext("2d");
var toolBar1 = toolBar.getContext("2d");
var barIMG = document.createElement("img");
var instructionIMG = document.createElement("img");

var instructionCanvas = document.getElementById("sideMenu");
var instructionCanvas1 = instructionCanvas.getContext("2d");

var thickness = 10; //pen thickness

var redMode = false
var greenMode = false
var blueMode = false
var mouseDown = false;
var eraseMode = false
var brushMode = true


barIMG.setAttribute('src', 'img/tools.png');
   barIMG.onload = function() {
    toolBar1.drawImage(barIMG, 0, 0);
  }

instructionIMG.setAttribute('src', 'img/instructions2.png');
instructionIMG.onload = function() {
  instructionCanvas1.drawImage(instructionIMG, 0, 0);
}

function save(){
  var link = document.getElementById('saveButton')
  link.href = canvas.toDataURL();
  link.download = "mypainting.png";
  //document.body.appendChild(link);
}



function start(){
    console.log("button pressed");
    canvas1.clearRect(0, 0, 600, 600);
    canvas1.font = '20px "Chalkboard"';
    canvas1.fillStyle = 'rgba(0, 0, 0, 1)'; // Set white to the color of letters
    canvas1.fillText('be creARTive', 10,20)
  render();

  //requestAnimationFrame(render);
}

function render(){

  canvas.onmousedown = function(){ 
    mouseDown = true;
    console.log(mouseDown)
  }
  canvas.onmouseup = function(){
    mouseDown = false;
    console.log(mouseDown)
  }
  
  toolBar.addEventListener('mousedown',onDown,false);
  
  canvas.addEventListener('mousemove',operate,false);
  
  
}
  function operate(event){
    if(mouseDown){
    cx = event.pageX-this.offsetLeft;
    cy = event.pageY-this.offsetTop;
    if(eraseMode){
      canvas1.fillStyle = "white"
    }else{
    canvas1.fillStyle = color;

    }
    canvas1.beginPath();
    canvas1.arc( cx, cy, thickness , 0, Math.PI*2, true );
    canvas1.closePath();
    canvas1.fill();
  }
  }
  function onDown(event){
    cx = event.pageX;
    cy = event.pageY;

    if(cx > 10 && cx < 97 && cy > 517 && cy < 719){
      if(redMode){
        redMode = false;
      }else{
        redMode = true;
      }
    }else if(cx > 109 && cx < 190 && cy > 517 && cy < 719){
      if(greenMode){
        greenMode = false;
      }else{
        greenMode = true;
      }
    }else if(cx > 195 && cx < 267 && cy > 517 && cy < 719){
      if(blueMode){
        blueMode = false;
      }else{
        blueMode = true;
      }
    }else if(cx > 419 && cx < 496 && cy > 517 && cy < 719){
      if(brushMode){
        eraseMode = true
        brushMode = false
      }

    }else if(cx > 409 && cx < 621 && cy > 517 && cy < 719){
        if(eraseMode){
          brushMode = true
          eraseMode = false
        }
    }else if(cx > 272 && cx < 341 && cy > 519 && cy < 719){
      if(thickness >4)
       thickness--;
       console.log("thickness: " + thickness)
    }else if(cx > 347 && cx < 417 && cy > 519 && cy < 719){
      if(thickness <60)
      thickness++;
             console.log("thickness: " + thickness)

    }
  if(!redMode && !greenMode && ! blueMode){
    barIMG.setAttribute('src', 'img/tools.png');
    barIMG.onload = function() {
     toolBar1.drawImage(barIMG, 0, 0); 
    }   
    color = "black";

  }else if(redMode && !greenMode && !blueMode){
    barIMG.setAttribute('src', 'img/Rtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "red";
  }else if(!redMode && greenMode && !blueMode){
    barIMG.setAttribute('src', 'img/Gtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "green";
  }else if(!redMode && !greenMode && blueMode){
    barIMG.setAttribute('src', 'img/Btools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "blue";
  }else if(redMode && greenMode && !blueMode){
    barIMG.setAttribute('src', 'img/RGtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "yellow";
  }else if(redMode && !greenMode && blueMode){
    barIMG.setAttribute('src', 'img/RBtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "#ff00ff";
  }else if(!redMode && greenMode && blueMode){
    barIMG.setAttribute('src', 'img/GBtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "#00ffff";

  }else if(redMode && greenMode && blueMode){
    barIMG.setAttribute('src', 'img/RGBtools.png');
    barIMG.onload = function() {
      toolBar1.drawImage(barIMG, 0, 0);
    }
    color = "#ffffff";

  }
  }







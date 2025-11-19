let currentBrush = "calligraphy"
let currentColor = "dark green"
let brushImage

let selectedSize = 30

function preload(){
  
//brushes and brush colors
  airbrushimg = loadImage('airbrush.png');
  airbrushredimg = loadImage('airbrushred.png');
  airbrushorangeimg = loadImage('airbrushorange.png');
  airbrushblueimg = loadImage('airbrushblue.png');
  airbrushgreenimg = loadImage('airbrushgreen.png');
  airbrushdarkgreenimg = loadImage('airbrushdarkgreen.png');
  airbrushwhiteimg = loadImage('airbrushwhite.png');
  
  paintimg = loadImage('paint.png');
  paintredimg = loadImage('paintred.png');
  paintorangeimg = loadImage('paintorange.png');
  paintblueimg = loadImage('paintblue.png');
  paintgreenimg = loadImage('paintgreen.png');
  paintdarkgreenimg = loadImage('paintdarkgreen.png');
  paintwhiteimg = loadImage('paintwhite.png');
  
  calligraphyimg = loadImage('calligraphy.png');
  calligraphyredimg = loadImage('calligraphyred.png');
  calligraphyorangeimg =loadImage('calligraphyorange.png');
  calligraphyblueimg = loadImage('calligraphyblue.png');
  calligraphygreenimg = loadImage('calligraphygreen.png');
  calligraphydarkgreenimg = loadImage('calligraphydarkgreen.png');
  calligraphywhiteimg = loadImage('calligraphywhite.png');
  
  crayonimg = loadImage('crayon.png');
  crayonredimg = loadImage('crayonred.png');
  crayonorangeimg = loadImage('crayonorange.png');
  crayonblueimg = loadImage('crayonblue.png');
  crayongreenimg = loadImage('crayongreen.png');
  crayondarkgreenimg = loadImage('crayondarkgreen.png');
  crayonwhiteimg = loadImage('crayonwhite.png');
}


function setup() {
  createCanvas(700,450);
  background(220);
  frameRate(60);
  rectMode(CENTER);
  

//color selector buttons  
  let redButton = createButton('red');
  redButton.position(width/2, 450);
  redButton.mousePressed(selectRed);
  
  let orangeButton = createButton('orange');
  orangeButton.position(width/4, 450);
  orangeButton.mousePressed(selectOrange);
  
  let blueButton = createButton('blue');
  blueButton.position(width/3, 450);
  blueButton.mousePressed(selectBlue);
   
  let greenButton = createButton('green')
  greenButton.position(width-100, 450);
  greenButton.mousePressed(selectGreen);
  
  let darkGreenButton = createButton('dark green');
  darkGreenButton.position(width-200, 450);
  darkGreenButton.mousePressed(selectDarkGreen);
  
  let whiteButton = createButton('white');
  whiteButton.position(width-300, 450);
  whiteButton.mousePressed(selectWhite);
   
  let blackButton = createButton('black');
  blackButton.position(width-600, 450);
  blackButton.mousePressed(selectBlack);
  
  let airbrushButton = createButton('airbrush');
  airbrushButton.position(50, 50);
  airbrushButton.mousePressed(selectAirbrush);
  
  let paintButton = createButton('paintbrush');
  paintButton.position(50,75)
  paintButton.mousePressed(selectPaint);
  
  let calligraphyButton = createButton('calligraphy');
  calligraphyButton.position(50,100);
  calligraphyButton.mousePressed(selectCalligraphy);
  
  let crayonButton = createButton('crayon')
  crayonButton.position(50,125);
  crayonButton.mousePressed(selectCrayon);
}

function selectRed(){
  currentColor = "red"
}

function selectOrange(){
  currentColor = "orange"
}

function selectBlue(){
  currentColor = "blue"
}

function selectGreen(){
  currentColor = "green"
}

function selectDarkGreen(){
  currentColor = "dark green"
}

function selectWhite(){
  currentColor = "white"
}

function selectBlack(){
  currentColor = "black"
}
  
//brush button decides type of brush
  
function selectAirbrush(){
  currentBrush = "airbrush"
}
  
function selectPaint(){
  currentBrush = "paint"
}
  
function selectCalligraphy(){
  currentBrush = "calligraphy"
}
  
function selectCrayon(){
  currentBrush = "crayon"
}


function draw() {
  
// AIRBRUSH
if (currentBrush == "airbrush") {
  if (currentColor == "red") brushImage = airbrushredimg;
  else if (currentColor == "orange") brushImage = airbrushorangeimg;
  else if (currentColor == "green") brushImage = airbrushgreenimg;
  else if (currentColor == "dark green") brushImage = airbrushdarkgreenimg;
  else if (currentColor == "blue") brushImage = airbrushblueimg;
  else if (currentColor == "white") brushImage = airbrushwhiteimg;
  else brushImage = airbrushimg;
}

// PAINT
else if (currentBrush == "paint") {
  if (currentColor == "red") brushImage = paintredimg;
  else if (currentColor == "orange") brushImage = paintorangeimg;
  else if (currentColor == "green") brushImage = paintgreenimg;
  else if (currentColor == "dark green") brushImage = paintdarkgreenimg;
  else if (currentColor == "blue") brushImage = paintblueimg;
  else if (currentColor == "white") brushImage = paintwhiteimg;
  else brushImage = paintimg;
}

// CALLIGRAPHY
else if (currentBrush == "calligraphy") {
  if (currentColor == "red") brushImage = calligraphyredimg;
  else if (currentColor == "orange") brushImage = calligraphyorangeimg;
  else if (currentColor == "green") brushImage = calligraphygreenimg;
  else if (currentColor == "dark green") brushImage = calligraphydarkgreenimg;
  else if (currentColor == "blue") brushImage = calligraphyblueimg;
  else if (currentColor == "white") brushImage = calligraphywhiteimg;
  else brushImage = calligraphyimg;
}

// CRAYON
else if (currentBrush == "crayon") {
  if (currentColor == "red") brushImage = crayonredimg;
  else if (currentColor == "orange") brushImage = crayonorangeimg;
  else if (currentColor == "green") brushImage = crayongreenimg;
  else if (currentColor == "dark green") brushImage = crayondarkgreenimg;
  else if (currentColor == "blue") brushImage = crayonblueimg;
  else if (currentColor == "white") brushImage = crayonwhiteimg;
  else brushImage = crayonimg;
}
  
if (mouseIsPressed===true){
  imageMode(CENTER)
  image(brushImage, mouseX, mouseY, 40,40);
  }
  
console.log(currentBrush)
console.log(currentColor)
console.log(brushImage)

}
  


///////////Classes///////////
class Brush {
  constructor(brushName, brushSize, brushShape, brushSound, brushColor){
    this.x = mouseX;
    this.y = mouseY;
    this.brushName = brushName;
    this.brushSize = brushSize;
    this.brushShape = brushShape;
    this.brushSound = brushSound;
    this.brushColor = brushColor;
  }
}

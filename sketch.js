let currentBrush = "crayon";
let currentColor = "dark green";
let brushImage;
let brushSize = 40;

let lastActivityTime = 0

let backgroundImg;
let buttonImgs;
let sliderImg

//sounds
let brushSound;
let sprayPaintSound;
let calligraphySound;
let sparkleSound;
let twinkleSound;
let bubbleSound;
let splatSound;

let brushSizeSliderY = 200;

let selectedSize = 30;

let g;

function preload() {
  backgroundImg = loadImage("background.png");
  loadImage("buttonArt.PNG");
  sliderImg = loadImage("sliderImg.JPEG");
  artBlocScreen = loadImage("artBloc.PNG")

  //brushes and brush colors
  airbrushimg = loadImage("airbrush.png");
  airbrushredimg = loadImage("airbrushred.png");
  airbrushorangeimg = loadImage("airbrushorange.png");
  airbrushblueimg = loadImage("airbrushblue.png");
  airbrushgreenimg = loadImage("airbrushgreen.png");
  airbrushdarkgreenimg = loadImage("airbrushdarkgreen.png");
  airbrushwhiteimg = loadImage("airbrushwhite.png");

  paintimg = loadImage("paint.png");
  paintredimg = loadImage("paintred.png");
  paintorangeimg = loadImage("paintorange.png");
  paintblueimg = loadImage("paintblue.png");
  paintgreenimg = loadImage("paintgreen.png");
  paintdarkgreenimg = loadImage("paintdarkgreen.png");
  paintwhiteimg = loadImage("paintwhite.png");

  calligraphyimg = loadImage("calligraphy.png");
  calligraphyredimg = loadImage("calligraphyred.png");
  calligraphyorangeimg = loadImage("calligraphyorange.png");
  calligraphyblueimg = loadImage("calligraphyblue.png");
  calligraphygreenimg = loadImage("calligraphygreen.png");
  calligraphydarkgreenimg = loadImage("calligraphydarkgreen.png");
  calligraphywhiteimg = loadImage("calligraphywhite.png");

  crayonimg = loadImage("crayon.png");
  crayonredimg = loadImage("crayonred.png");
  crayonorangeimg = loadImage("crayonorange.png");
  crayonblueimg = loadImage("crayonblue.png");
  crayongreenimg = loadImage("crayongreen.png");
  crayondarkgreenimg = loadImage("crayondarkgreen.png");
  crayonwhiteimg = loadImage("crayonwhite.png");

  //Brush sound effects
  sprayPaintSound = loadSound("spraypaint.mp3");
  calligraphySound = loadSound("calligraphy.mp3");

  //Button sound effects
  sparkleSound = loadSound("sparkle.mp3");
  twinkleSound = loadSound("twinkle.mp3");
  bubbleSound = loadSound("bubble.mp3");
  splatSound = loadSound("splat.mp3");
}

function setup() {
  createCanvas(700, 450);

  background(200);
  imageMode(CORNER);

  frameRate(60);
  rectMode(CENTER);

  g = createGraphics(700, 450);

  //color selector buttons
  let redButton = createButton("red");
  redButton.position(width / 2, 400);
  redButton.mousePressed(selectRed);

  let orangeButton = createButton("orange");
  orangeButton.position(400, 400);
  orangeButton.mousePressed(selectOrange);

  let blueButton = createButton("blue");
  blueButton.position(290, 400);
  blueButton.mousePressed(selectBlue);

  let greenButton = createButton("green");
  greenButton.position(230, 400);
  greenButton.mousePressed(selectGreen);

  let darkGreenButton = createButton("dark green");
  darkGreenButton.position(180, 400);
  darkGreenButton.mousePressed(selectDarkGreen);
  darkGreenButton.size(50, 50);

  let whiteButton = createButton("white");
  whiteButton.position(30, 320);
  whiteButton.mousePressed(selectWhite);
  whiteButton.size(50, 50);

  let blackButton = createButton("black");
  blackButton.position(460, 400);
  blackButton.mousePressed(selectBlack);

  let airbrushButton = createButton("airbrush");
  airbrushButton.position(30, 150);
  airbrushButton.mousePressed(selectAirbrush);
  airbrushButton.size(50, 50);

  let paintButton = createButton("paintbrush");
  paintButton.position(30, 80);
  paintButton.mousePressed(selectPaint);
  paintButton.size(50, 50);

  let calligraphyButton = createButton("calligraphy");
  calligraphyButton.position(30, 270);
  calligraphyButton.mousePressed(selectCalligraphy);
  calligraphyButton.size(50, 50);

  let crayonButton = createButton("crayon");
  crayonButton.position(30, 200);
  crayonButton.mousePressed(selectCrayon);
  crayonButton.size(50, 50);
  
  //BUTTONS ART
  buttonImgs = createImg("buttonArt.PNG", "buttons");
  buttonImgs.position(0, 0);
  buttonImgs.size(700, 450);
  buttonImgs.style("pointer-events", "none");
  //buttonImgs.style("opacity", "0.5");

}

function selectRed() {
  currentColor = "red";
  twinkleSound.play();
}

function selectOrange() {
  currentColor = "orange";
  twinkleSound.play();
}

function selectBlue() {
  currentColor = "blue";
  twinkleSound.play();
}

function selectGreen() {
  currentColor = "green";
  twinkleSound.play();
}

function selectDarkGreen() {
  currentColor = "dark green";
  twinkleSound.play();
}

function selectWhite() {
  currentColor = "white";
  twinkleSound.play();
}

function selectBlack() {
  currentColor = "black";
  twinkleSound.play();
}

//brush button decides type of brush

function selectAirbrush() {
  currentBrush = "airbrush";
  splatSound.play();
}

function selectPaint() {
  currentBrush = "paint";
  splatSound.play();
}

function selectCalligraphy() {
  currentBrush = "calligraphy";
  splatSound.play();
}

function selectCrayon() {
  currentBrush = "crayon";
  splatSound.play();
}


function updateActivity() {
  lastActivityTime = millis();
}


function draw() {
  
  if (millis() - lastActivityTime > 20000) {
    image(artBlocScreen, 0, 0, 700, 450);
    buttonImgs.hide();
    selectAll("button").forEach(b => b.hide());

    return; // stop drawing anything else
  }
  
  // AIRBRUSH
  if (currentBrush == "airbrush") {
    brushSound = sprayPaintSound;
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
    brushSound = sprayPaintSound;
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
    brushSound = calligraphySound;
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
    brushSound = sprayPaintSound;

    if (currentColor == "red") brushImage = crayonredimg;
    else if (currentColor == "orange") brushImage = crayonorangeimg;
    else if (currentColor == "green") brushImage = crayongreenimg;
    else if (currentColor == "dark green") brushImage = crayondarkgreenimg;
    else if (currentColor == "blue") brushImage = crayonblueimg;
    else if (currentColor == "white") brushImage = crayonwhiteimg;
    else brushImage = crayonimg;
  }

  //BRUSH SIZE SLIDER
  background(200);
  image(backgroundImg, 0, 0, 700, 450);

  if (
    mouseX <= 680 &&
    mouseX >= 600 &&
    mouseY >= 100 &&
    mouseY <= 300 &&
    mouseIsPressed
  ) {
    brushSizeSliderY = mouseY;
    brushSize = mouseY * -1 + 300;

    //BRUSH SIZE SLIDER SOUND
    if (!sparkleSound.isPlaying()) {
      sparkleSound.loop(); // continuous sound while drawing
      
    updateActivity();
    }

    //BRUSH
  } else if (
    mouseIsPressed === true &&
    mouseX >= 150 &&
    mouseX <= 575 &&
    mouseY >= 100 &&
    mouseY <= 360
  ) {
    g.imageMode(CENTER);
    g.image(brushImage, mouseX, mouseY, brushSize, brushSize);
    
    updateActivity();

    //Brush sound
    if (!brushSound.isPlaying()) {
      brushSound.loop(); // continuous sound while drawing
    }
  } else {
    if (
      (brushSound && brushSound.isPlaying()) ||
      (sparkleSound && sparkleSound.isPlaying())
    ) {
      brushSound.stop();
      sparkleSound.stop();
    }
  }

  imageMode(CORNER);
  image(g, 0, 0);
  

 // rect(650, height / 2, 10, 200);
 //rect(650, brushSizeSliderY, 60, 30);
   image(sliderImg,610, brushSizeSliderY, 70, 40);
}

let myFont;
let a;
let x, y;

function preload() {
  myFont = loadFont("Arial.ttf");
}

let message = "Studio.Proxy";
let cSize;
let h;
let spacing;
let rN;
// An array of Letter objects
let letters = [message.length];

function setup() {
  cSize = textWidth(message) * 4;
  h = cSize * 0.12;
  spacing = textWidth(message) / message.length;
  let cnv = createCanvas(cSize, cSize * 0.25);
  //cnv.style('display', 'block');
  cnv.position(0,0);
  frameRate(2);
  textFont(myFont);
  textSize(h);

  x = spacing * 2;
  y = (height - h / 2) / 2;

  for (let i = 0; i < message.length; i++) {
    letters[i] = new Letter(x, y, message.charAt(i));
    x += textWidth(message.charAt(i)) + spacing;
  }
}

function draw() {
  background('#f8f9fa');

  rN = floor(random(message.length));

  for (let i = 0; i < letters.length; i++) {
    if (rN == i) {
      letters[i].c = 255;
    } else {
      letters[i].c = 0;
    }
    letters[i].display();
    letters[i].shake();
    }
  if (frameCount == 2){
  noLoop();
}
}

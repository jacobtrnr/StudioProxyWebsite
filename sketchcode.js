
let myFont;
let a;
let x, y;

function preload() {
  myFont = loadFont('Arial.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 
}

let message = 'STUDIO.PROXY';
let link = 'COMING SOON';
let tStart;
let seed = 0;
let h = 70;
// An array of Letter objects
let letters = [message.length];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(30);
  // Load the font
  // f = createFont("Arial", h);
  textFont(myFont);
  textSize(h);
  a = createA('', link); //'main.html'
  a.style('font-size', '30px');
  a.style('font-family', 'Arial');
  a.style('color', 'black');
  // a.style('position', 'absolute');
  // a.style('top', '50%');
  // a.style('width', '100%');
  // a.style('text-align', 'center')
  // a.style('text-decoration', 'none');

  x = ((width - textWidth(message)) / 2);
  y = height / 2;

  for (let i = 0; i < message.length; i++) {
    letters[i] = new Letter(x, y, message.charAt(i));
    x += textWidth(message.charAt(i));
    // if (i==5){ // attempt to change height
    //   y += h
    // }
    w = textWidth(message);
    tStart = (width - w) / 2;
  }

// if width is greater than message width split message and move down
 

}

function draw() {
  background(255);
  
  
 rectMode(CENTER)
  rect(width/2, (height+h/6) / 2, w * 1.05, h * 1.3);
  for (let i = 0; i < letters.length; i++) {


    letters[i].display();
    let distance = dist(mouseX, mouseY, letters[i].x, letters[i].y);
    stroke(0);
    strokeWeight(2);


    if (distance < h + h / 2 || mouseX > tStart && mouseX < tStart + w && mouseY > (height - h) / 2 && mouseY < (height - h) / 2 + h) {
      letters[i].shake();
      letters[i].rA = 20;

      a.position((width - 142) / 2, (height - 20) / 2);

      noFill();
    } else {
      letters[i].home();
      //letters[i].rA = map(dist,0,350,20,2);
      a.position(width, height);
    }
  }
}


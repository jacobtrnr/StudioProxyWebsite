class Letter {

  constructor(x, y, letter_) {
    this.letter = letter_;

    this.a = 4;
    this.rA = textWidth(this.letter)/4;
    this.lerpFactor = 0.08;
    this.x = x;
    this.y = y;
    this.theta = 0;
    this.tempTheta = this.theta;
    this.homex = this.x;
    this.homey = this.y;
    this.letter = letter_;
    this.c=0;
  }

  // Display the letter
  display() {

    push();
    translate(this.x + textWidth(this.letter) / 2, this.y);
    rotate(this.theta);
    fill(0,0,this.c);
    textAlign(CENTER, CENTER);
    noStroke();
    text(this.letter, 0, 0); 
    pop();
  }

  // Move the letter randomly
  shake() {
  
    this.x = random(this.homex-this.rA, this.homex + this.rA);
    this.y = random(this.homey-this.rA, this.homey + this.rA);
    this.theta = random(-PI / this.a, PI / this.a);
 
  }


}
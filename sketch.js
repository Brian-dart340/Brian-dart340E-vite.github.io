let x = 30;
let xPos = -202;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(86,216,252);
  ellipse(x,200,150,110);
  
  translate(xPos,-2)
  line(215,190,170,200)
  
  translate(80,-10)
  line(217,210,170,200)
  
  translate(75,50)
  line(50,190, 70, 200)

  line(100,190,80,200)

  x = x + 1;
  xPos = xPos + 1;
  
}
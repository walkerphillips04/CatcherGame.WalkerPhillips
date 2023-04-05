let dropOrange;
let FaceX;
let FaceY;
let orangeX;
let orangeY;
let orangeSpeed;
function setup() {
  FaceX = mouseX;
  FaceY = 300;
  // groundY = 345;
  orangeX = random(10, 380); //sets random orange spawn parameters
  orangeY = -400; //sets orange Y spawn
  orangeSpeed = random(7, 15); // sets orange speed
  createCanvas(400, 400);
  OrangeEaten = false;
}

function draw() {
  background("skyblue");
  noStroke();
  // make ground
  fill(92, 64, 51);
  rect(0, 345, 400);
  if (mouseIsPressed) {
    // this is the actual code to make the orange spawn.
    dropOrange = true;
  }
  if (dropOrange) {
    orange(orangeX, orangeY, 0.2); // the third parameter resizes the orange
    orangeY = orangeY + orangeSpeed;
  }
  addFace(FaceX, FaceY);

  let d = dist(mouseX, 345, orangeX, orangeY);

  if (d < 50) {
    EatOrange = true;
    ellipse(18, 20, 7, 0);
    ellipse(32, 20, 7, 0);
  } else {
    EatOrange = false;
    ellipse(18, 20, 5, 5);
    ellipse(32, 20, 5, 5);
  }

  function addFace(x, y) {
    push();
    translate(mouseX, y);

    // Draw the face
    fill(255, 220, 165);
    strokeWeight(2);
    stroke(0);
    ellipse(25, 25, 40, 40);

    // Draw the eyes
    fill(0);
    noStroke();

    // Draw the mouth
    noFill();
    strokeWeight(3);
    stroke(2);
    fill("black");
    arc(25, 35, 15, 10, 4, 3.9);
  }
}

function orange(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("orange"); // colors the orange
  ellipse(200, 200, 80, 80); // draw orange circle

  if (orangeY >= 305) {
    orangeY = -50;
    dropOrange = false;
    orangeX = random(10, 380);
    //this sets the parameters of where the orange spawns in the sky and how far it can fall until hitting the ground.
  }
  pop();
}

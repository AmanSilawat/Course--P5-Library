let x = 200;
let y = 200;
let extraCanvas;
let circle_size = 50;

function setup() {
    createCanvas(400, 400);
    extraCanvas = createGraphics(400, 400);
    extraCanvas.clear(); // clear the canvas
    background(0);
}

function draw() {

    // No trails!
    background(0);
    x += random(-5, 5);
    y += random(-5, 5);

    // trails
    if (mouseIsPressed) {
        extraCanvas.fill(255, 150);
        extraCanvas.noStroke();
        extraCanvas.ellipse(mouseX, mouseY, circle_size, circle_size);
    }

    image(extraCanvas, 0, 0);
    fill(255, 0, 0);
    stroke(255);
    rectMode(CENTER);
    rect(x, y, 20, 20);
}
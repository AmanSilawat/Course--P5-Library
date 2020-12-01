function setup() {
    createCanvas(300, 300);
    background(250, 250, 100);
}

function draw() {
    fill(255, 25, 25, 50)
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
    background(250, 250, 100);
}
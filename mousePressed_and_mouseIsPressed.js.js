var on = false;
let _rect = {
    x: 100,
    y: 100,
    width: 150,
    height: 150
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    if (on) {
        background(0, 255, 0);
    } else {
        background(0);
    }
    strokeWeight(3);
    stroke(255);
    fill(0);
    if (
        mouseX > _rect.x - _rect.width / 2 &&
        mouseX < _rect.x + _rect.width / 2 &&
        mouseY > _rect.y - _rect.height / 2 &&
        mouseY < _rect.y + _rect.height / 2
    ) {
        fill(100, 100, 200);
    }

    rectMode(CENTER)
    rect(_rect.x, _rect.y, _rect.width, _rect.height);
}

// mouse click event
function mousePressed() {
    on = !on;
}
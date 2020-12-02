function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(3);
    stroke(255);

    // use mouseX, mouseY instance of height and weight
    for (let x = 0; x <= width; x += 50) {
        for (let y = 0; y <= height; y += 50) {
            fill(random(200, 50),random(200, 50) ,random(200, 50));
            ellipse(x, y, 25, 25);
        }
    }
}
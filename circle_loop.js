let offset = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(3);
    stroke(255);

    let x = 0;
    for(let x = 0; x <= width; x += 50) {
        fill(random(255), random(255), 0);
        ellipse(x + offset, 300, 25, 25);
    }
    offset += 1;
}

let spot = {
    x: 20,
    y: 20,
    size: 24
}

let col = {
    r: 200,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    col.r = 0;
    col.g = random(100, 255);
    col.b = random(0, height);

    fill(col.r, col.g, col.b, 100);
    noStroke()

    spot.x = random(0, width)
    spot.y = random(0, height)
    // FileList()
    ellipse(spot.x, spot.y, spot.size, spot.size);

    
}
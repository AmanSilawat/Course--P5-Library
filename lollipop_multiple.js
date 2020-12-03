function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(50);

    lollipop(100, 100, 40);
    lollipop(400, 100, 120);
    lollipop(50, 50, 15);
    lollipop(200, 250, 60);
}

function lollipop(x, y, diameter) {
    fill(0, 200, 255);
    let strow_width = diameter / 4;
    rect(
        x - strow_width / 2,
        y + diameter / 2 - 10,
        strow_width,
        diameter
    );

    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);
}
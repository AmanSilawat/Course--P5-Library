let _canvas = {
    width: 600,
    height: 400,
    shaking_balls: []
}

function setup() {
    createCanvas(_canvas.width, _canvas.height);
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 50);
        _canvas.shaking_balls.push(new Bubble(x, y, r));
    }
}

function draw() {
    background(0);
    for (const ball of _canvas.shaking_balls) {
        ball.move();
        ball.show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r*2);
    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            this.brightness = 255;
        }
    }
}

// try other more event
// mousePressed, mouseDragged
function mousePressed() {
    for (const bubble of _canvas.shaking_balls) {
        bubble.clicked(mouseX, mouseY);
    }
}
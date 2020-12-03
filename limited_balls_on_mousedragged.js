let _canvas = {
    width: 600,
    height: 400,
    shaking_ball: []
}

function setup() {
    createCanvas(_canvas.width, _canvas.height);
}

function draw() {
    background(0);
    for (const ball of _canvas.shaking_ball) {
        ball.move();
        ball.show();
    }
}

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 20;
    }

    move() {
        this.x = this.x;
        this.y = this.y;
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(0);
        ellipse(this.x, this.y, this.size);
        if (_canvas.shaking_ball.length >= 10) {
            _canvas.shaking_ball.splice(0, 1)
        }
    }
}

// try other more event
// mousePressed, mouseDragged
function mouseDragged() {
    let x = mouseX;
    let y = mouseY;
    _canvas.shaking_ball.push(new Bubble(x, y));
}
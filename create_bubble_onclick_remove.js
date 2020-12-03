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

function mousePressed() {

}

function draw() {
    background(0);
    for (let i = 0; i < _canvas.shaking_balls.length; i++) {
        if (_canvas.shaking_balls[i].contains(mouseX, mouseY)) {
            _canvas.shaking_balls[i].changeColor(255);
        } else {
            _canvas.shaking_balls[i].changeColor(0);
        }

        _canvas.shaking_balls[i].move();
        _canvas.shaking_balls[i].show();

    }
    for (const ball of _canvas.shaking_balls) {
        ball.move();
        ball.show();
        ball.changeColor();
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
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }

    changeColor() {
        this.brightness = 255;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false
        }
    }
}

// try other more event
// mousePressed, mouseDragged
function mousePressed() {
    for (let i = _canvas.shaking_balls.length - 1; i >= 0; i--) {
        if (_canvas.shaking_balls[i].contains(mouseX, mouseY)) {
            _canvas.shaking_balls.splice(i, 1);
        }
    }
}
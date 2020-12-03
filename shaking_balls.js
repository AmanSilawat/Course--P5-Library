let _canvas = {
    width: 600,
    height: 400,
    shaking_ball: [],
    balls: 50
}

function setup() {
    createCanvas(_canvas.width, _canvas.height);
    for (let i = 0; i < _canvas.balls; i++) {
        _canvas.shaking_ball.push(new Bubble());
    }
}

function draw() {
    background(0);
    for (const ball of _canvas.shaking_ball) {
        ball.move();
        ball.show();
    }
}

class Bubble {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.size = random(5, 80);
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(0);
        ellipse(this.x, this.y, this.size);
    }
}
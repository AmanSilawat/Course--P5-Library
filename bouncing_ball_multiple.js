let _canvas = {
    width: 600,
    height: 400
}

let bouncing_ball = [];
function setup() {
    createCanvas(_canvas.width, _canvas.height);
    frameRate(60);
    ellipseMode(RADIUS)
    noStroke()
    let balls = random(20);
    for (let i = 0; i < balls; i++) {
        bouncing_ball.push(new Bouncing_ball());
    }
}

function draw() {
    background(200);
    
    for (const ball of bouncing_ball) {
        ball.move();
    }
}


class Bouncing_ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = random(5, 30);
        this.x_speed = random(0.01, 10);
        this.y_speed = random(0.01, 10);
        this.x_direction = random([1, -1]);
        this.y_direction = random([1, -1]);
        this.color = {
            r: random(255),
            g: random(255),
            b: random(255),
        }
    }

    move() {
        this.x = this.x + this.x_speed * this.x_direction;
        this.y = this.y + this.y_speed * this.y_direction;

        if (this.x > width - this.size || this.x < this.size) {
            this.x_direction *= -1;
        }

        if (this.y > height - this.size || this.y < this.size) {
            this.y_direction *= -1;
        }

        fill(this.color.r, this.color.g, this.color.b);
        noStroke();

        ellipse(this.x, this.y, this.size, this.size);
    }
}
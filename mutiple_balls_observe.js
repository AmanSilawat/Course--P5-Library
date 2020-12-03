let _canvas = {
    width: 600,
    height: 400,
    box: {
        width: null,
        height: null,
    },
    partition: {
        x: 3,
        y: 3,
    },
    bouncing_ball: [],
    repeat_color: {},
};
function setup() {
    let cnv = createCanvas(_canvas.width, _canvas.height);
    cnv.parent("sketchHolder");

    frameRate(60);
    ellipseMode(RADIUS);
    noStroke();
    let balls = random(1, 25);
    // let balls = 4;
    for (let i = 0; i < balls; i++) {
        _canvas.bouncing_ball.push(new Bouncing_ball());
    }

    _canvas.box.width = width / _canvas.partition.x;
    _canvas.box.height = height / _canvas.partition.y;
    background(200);
}

function draw() {
    for (const ball of _canvas.bouncing_ball) {
        ball.move();
    }
}

class Bouncing_ball {
    constructor() {
        this.canvas_width = width;
        this.canvas_height = height;
        this.x = this.canvas_width / 2;
        this.y = this.canvas_height / 2;
        this.size = random(10, 50);
        this.x_speed = random(0.5, 5);
        this.y_speed = random(0.5, 5);
        this.x_direction = random([1, -1]);
        this.y_direction = random([1, -1]);
        this.color = this.get_color();
        this.object = createSpan('');

        this.object.style('border-radius', '50%');
        this.object.style('width', `${this.size}px`);
        this.object.style('height', `${this.size}px`);
        this.object.style('background-color', `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`);
        this.object.position(this.x + this.size / 2, this.y + this.size / 2);
        this.object.parent("sketchHolder");

    }

    get_color() {
        let color = {
            r: Math.floor(random(255)),
            g: Math.floor(random(255)),
            b: Math.floor(random(255)),
        };
        let key = `r${color.r}g${color.g}b${color.b}`;
        if (key in _canvas.repeat_color) {
            return this.get_color();
        } else {
            _canvas.repeat_color[key] = '';
            return color;
        }
    }

    move() {
        this.x = this.x + this.x_speed * this.x_direction;
        this.y = this.y + this.y_speed * this.y_direction;

        if (this.x <= _canvas.box.width - this.size / 2 && this.y <= _canvas.box.height - this.size / 2) {
            this.canvas_width = _canvas.box.width;
            this.canvas_height = _canvas.box.height;

            if (this.x >= this.canvas_width - this.size / 2 || this.x <= this.size / 2) {
                this.x_direction *= -1;
            }

            if (this.y >= this.canvas_height - this.size / 2 || this.y <= this.size / 2) {
                this.y_direction *= -1;
            }
        } else if (
            this.x <= _canvas.box.width - this.size / 2 &&
            this.y >= this.canvas_height - _canvas.box.height + this.size / 2
        ) {
            // bottom left
            this.canvas_width = _canvas.box.width;
            this.canvas_height = _canvas.box.height;

            if (this.x <= this.size / 2 || this.x >= _canvas.box.width) {
                this.x_direction *= -1;
            }

            if (this.y >= height - this.size / 2 || this.y <= height - _canvas.box.height) {
                this.y_direction *= -1;
            }
        } else if (
            this.x >= this.canvas_width - _canvas.box.width + this.size / 2 &&
            this.y <= _canvas.box.height - this.size / 2
        ) {
            // top right
            this.canvas_width = _canvas.box.width;
            this.canvas_height = _canvas.box.height;

            if (this.x >= width - this.size / 2 || this.x <= width - _canvas.box.width) {
                this.x_direction *= -1;
            }

            if (this.y <= this.size / 2) {
                this.y_direction *= -1;
            }
        } else if (
            this.x >= this.canvas_width - _canvas.box.width + this.size / 2 &&
            this.y >= this.canvas_height - _canvas.box.height + this.size / 2
        ) {
            // bottom right
            this.canvas_width = _canvas.box.width;
            this.canvas_height = _canvas.box.height;

            if (this.x >= width - this.size / 2 || this.x <= width - _canvas.box.width) {
                this.x_direction *= -1;
            }

            if (this.y >= height - this.size / 2 || this.y <= height - _canvas.box.height) {
                this.y_direction *= -1;
            }
        } else {
            if (this.x >= this.canvas_width - this.size / 2 || this.x <= this.size / 2) {
                this.x_direction *= -1;
            }

            if (this.y >= this.canvas_height - this.size / 2 || this.y <= this.size / 2) {
                this.y_direction *= -1;
            }
        }

        // ellipse(this.x, this.y, this.size, this.size);

        this.object.position(this.x - this.size / 2, this.y - this.size / 2);
        this.object.parent("sketchHolder");

        strokeWeight(2);
        stroke(this.color.r, this.color.g, this.color.b);
        point(this.x , this.y )
    }
}
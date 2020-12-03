let bubble;
function setup() {
    createCanvas(600, 400);
    bubble = new Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(50);

    lollipop(100, 100, 40);
    lollipop(400, 100, 120);
    lollipop(50, 50, 15);
    lollipop(200, 250, 60);
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
}
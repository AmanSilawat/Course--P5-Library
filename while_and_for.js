function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(3);
    stroke(255);

    let x = 0;
    while(x <= width) {
        let red = map(x, 0, width, 0, 255);
        fill(0, red, 0);
        ellipse(x, 100, 25, 25);
        x+= 50;
        // console.log(x, red);
    }

    for(let y = width; y >= 0; y -= 50) {
        let red2 = map(y, 0, width, 0, 255);
        fill(0, red2, 0);
        ellipse(y, 300, 25, 25);
        console.log(y, red2);
    }
}

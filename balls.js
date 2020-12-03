let nums = [90, 25, 50, 75];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    for(let i = 0; i < 4; i++) {
        stroke(255);
        fill(51);
        ellipse(i * 100 + 100, 200, nums[i], nums[i]);
        console.log(i);
    }
}
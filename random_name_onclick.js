let names = ['Moien Bhai', 'Saleh Majeet', 'Sahil Khan', 'Aman Silawat'];
let index = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(50);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(names[index], width / 2, height / 2);
}

function mousePressed() {
    index += 1;
    if(index == names.length) {
        index = 0;
    }
}
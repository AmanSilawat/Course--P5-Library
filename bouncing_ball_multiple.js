let _canvas = {
    width: 600,
    height: 400
}

let _circle = {
    x: null,
    y: null,
    size: 20,
    x_speed: 8,
    y_speed: 6,
    x_direction: null,
    y_direction: null
}

function setup() {
    createCanvas(_canvas.width, _canvas.height);
    frameRate(60);
    ellipseMode(RADIUS)
    noStroke()
    _circle.x = width / 2;
    _circle.y = height / 2;
    _circle.x_direction = random([1, -1]);
    _circle.y_direction = random([1, -1]);
}

function draw() {
    background(0);
    
    _circle.x = _circle.x + _circle.x_speed * _circle.x_direction;
    _circle.y = _circle.y + _circle.y_speed * _circle.y_direction;

    if (_circle.x > width - _circle.size || _circle.x < _circle.size) {
        console.log('1')
        _circle.x_direction *= -1;
    }
    
    if (_circle.y > height - _circle.size || _circle.y < _circle.size) {
        _circle.y_direction *= -1;
    }

    ellipse(_circle.x, _circle.y, _circle.size, _circle.size);
}
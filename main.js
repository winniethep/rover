canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var rover_x = 10;
var rover_y = 10;
var background_image = nasa[random];
var rover_image = "rover.png";
var nasa = ["1.jpg", "2.jpg", "3.jpg"];
var random = Math.floor(Math.random() * 3);

function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;
    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover.width, rover.height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '40') {
        down();
    }
    if (keyPressed == '37') {
        left();
    }
    if (keyPressed == '39') {
        right();
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}
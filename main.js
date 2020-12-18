var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({ top: player_y, left: player_x });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '65') {
        new_image('ironman_face.png')
        console.log("a")
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '66') {
        new_image('spiderman_body.png')
        console.log("b")
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '67') {
        new_image('hulk_legs.png')
        console.log("c")
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '68') {
        new_image('captain_america_left_hand.png')
        console.log("d")
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '69') {
        new_image('thor_right_hand.png')
        console.log("e")
    }
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '70') {
        new_image('thor_face.png')
        console.log("f")
    }
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '71') {
    new_image('thor_left_hand.png')
    console.log("g")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '72') {
    new_image('spiderman_face.png')
    console.log("h")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '73') {
    new_image('spiderman_left_hand.png')
    console.log("i")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '74') {
    new_image('spiderman_right_hand.png')
    console.log("j")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '75') {
    new_image('spiderman_legs.png')
    console.log("k")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '76') {
    new_image('ironman_left_hand.png')
    console.log("l")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '77') {
    new_image('ironman_right_hand.png')
    console.log("m")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '77') {
    new_image('ironman_right_hand.png')
    console.log("m")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '78') {
    new_image('ironman_body.png')
    console.log("n")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '79') {
    new_image('ironman_legs.png')
    console.log("o")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '81') {
    new_image('hulkd_body.png')
    console.log("p")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '82') {
    new_image('hulk_left_hand.png')
    console.log("q")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '83') {
    new_image('hulk_right_hand.png')
    console.log("r")
}
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '84') {
    new_image('hulk_face.png')
    console.log("s")
}
if (e.shiftKey == true && keyPressed == '80') {
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if (e.shiftKey && keyPressed == '77') {
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
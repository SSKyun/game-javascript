//setting
let canvas;
let ctxl
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width = 550;
canvas.height = 700;
document.body.appendChild(canvas);

let backgourndImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;

//우주선 좌표
let spaceshipX
let spaceshipY

function loadImage(){
    backgourndImage = new Image();
    backgourndImage.src="images/background.jpg";

    spaceshipImage = new Image();
    spaceshipImage.src="images/spaceship.png";

    enemyImage = new Image();
    enemyImage.src = "images/enemy.png";

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png";

    gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";
}

function render(){
    ctx.drawImage(backgourndImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(spaceshipImage)
}

function main(){
    render()
    requestAnimationFrame(main)
}

loadImage();
main();
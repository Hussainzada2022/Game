const blockSize = 25; /// Every cell size
const rows = 35;
const cols = 35;
let board;
let context;
/// Snake start from (5,5)
let SnakeX = blockSize * 5;
let SnakeY = blockSize * 5;
/// Sanake body
let SnakeBody = [];
/// Snake movement and speed
let valacityX = 0;
let valacityY = 0;
// snake food 
let foodX;
let foodY;

window.onload = ()=>{
    board = document.querySelector(".board");
    board.width = cols * blockSize;
    board.height = rows * blockSize;
    context = board.getContext("2d"); /// drwaing board or ground
    foodPlace();
    document.addEventListener("keyup",changeDirection);
    setInterval(updateBoard,1000/10);
}

function updateBoard(){
    // drwa board
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);
    // draw food
    context.fillStyle = "red";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    //draw snake head
    context.fillStyle = "lime";
    SnakeX += valacityX * blockSize;
    SnakeY += valacityY * blockSize;
    context.fillRect(SnakeX,SnakeY,blockSize,blockSize);
    // draw snake body
    for(let i = 0; i<snakeBody.length; i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }
    
}

function changeDirection(e){
    if(e.code === "ArrowUp" && valacityY != 1){
        valacityX = 0;
        valacityY = -1;
    }else if(e.code === "ArrowLeft" && valacityX != 1){
        valacityX = -1;
        valacityY = 0;
    }else if(e.code === "ArrowRight" && valacityX != -1){
        valacityX = 1;
        valacityY = 0;
    }else if(e.code === "ArrowDown" && valacityY != -1){
        valacityX = 0;
        valacityY = 1;
    }
}
function foodPlace(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}
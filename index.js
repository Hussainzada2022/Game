const blockSize = 25; /// Every cell size
const rows = 35;
const cols = 35;
let board;
let context;


window.onload = ()=>{
    board = document.querySelector(".board");
    board.width = cols * blockSize;
    board.height = rows * blockSize;
    context = board.getContext("2d"); /// drwaing board or ground
    updateBoard();
}

function updateBoard(){
    context.fillStyle = "black";
    context.fillRect(0,0,board.width,board.height);
}
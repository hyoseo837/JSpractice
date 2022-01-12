let board = ["","","","","","","","",""];
let turn = 0;
let sign = ["o","x"]
let colors = ["tomato","skyblue"]
let done = false;

let para = document.getElementById("demo")
let btns = []
btns.push(document.getElementById('0'))
btns.push(document.getElementById('1'))
btns.push(document.getElementById('2'))
btns.push(document.getElementById('3'))
btns.push(document.getElementById('4'))
btns.push(document.getElementById('5'))
btns.push(document.getElementById('6'))
btns.push(document.getElementById('7'))
btns.push(document.getElementById('8'))
let game = document.getElementById("game")


for(let i=0; i<9;i++){
    btns[i].addEventListener("click",()=>{
        if (board[i] == "" && !done){
            board[i] = sign[turn];
            turn = Number(!turn);
            btns[i].style.backgroundColor = colors[turn];
            checkwin();
        }
    })
}

game.addEventListener("click",()=>{
    board = ["","","","","","","","",""];
    turn = 0;
    done = false;
    for(let i=0; i<9;i++){
        btns[i].style.backgroundColor = "#cdcdcd";
    }
})

function checksame(a,b,c){
    if (board[a] = board[b] && board[b]==board[c] && board[a] != ""){
        done = true;
        if (board[0] == "o"){
            para.innerHTML = "player 1 win";
        }
        if (board[0] == "x"){
            para.innerHTML = "player 2 win";
        }
    }
}

function checkwin(){
    checksame(0,1,2);
    checksame(3,4,5);
    checksame(6,7,8);
    checksame(0,3,6);
    checksame(1,4,7);
    checksame(2,5,8);
    checksame(0,4,8);
    checksame(2,4,6);
}
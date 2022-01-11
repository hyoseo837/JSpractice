let board = ["","","","","","","","",""];
let turn = 0;
let sign = ["o","x"]
let colors = ["tomato","skyblue"]

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
        if (board[i] == ""){
            board[i] = sign[turn];
            turn = Number(!turn);
            btns[i].style.backgroundColor = colors[turn];
        }
    })
}

game.addEventListener("click",()=>{
    board = ["","","","","","","","",""];
    turn = 0;
    for(let i=0; i<9;i++){
        btns[i].style.backgroundColor = "#cdcdcd"
    }

})

function checkwin(){
    
}
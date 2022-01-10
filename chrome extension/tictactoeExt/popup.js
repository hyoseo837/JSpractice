let board = ["","","","","","","","",""];
let turn = 0;
let sign = ["o","x"]
let colors = ["tomato","skyblue"]

let para = document.getElementById("demo")
let btns = []
for(let i=0; i<9;i++){
    btns.push(document.getElementById(toString(i)))
}
console.log(btns)
for(let i=0; i<9;i++){
    btns[i].addEventListener("click",(turn)=>{
        if (board[i] == ""){
            board[i] = turn;
            btns[i].style.backgroundColor = colors[turn];
        }
    })
}
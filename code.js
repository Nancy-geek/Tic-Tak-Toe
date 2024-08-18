console.log("welcome to Tic Tac Toe");
let turnTune = new Audio("audio7.wav");
let gameOver = new Audio("audio5.wav");

let playGame= true;
var turn = "X";
// let button = document.querySelector('button')

// CHANGING TURN  
const changeTurn = function(){
    return turn === "X" ? "0" : "X";
    }

    // CHK WIN 
const chkwin= function(){
    let boxtext=document.querySelectorAll('.boxtext')                      // not queryselector - (queryselector will take only the first one)

    // let wins= [ [1,2,3], [4,5,6], [7,8,9] ,[1,4,7], [2,5,8], [3,6,9] , [1,5,9], [3,5,7] ]
    // indexing would start form 0 as first boxtext access krne ke liye boxtext[0] aana chahiye na 

    let wins= [ [0,1,2], [3,4,5], [6,7,8] ,[0,3,6], [1,4,7], [2,5,8] , [0,4,8], [2,4,6] ]  
    wins.forEach( e =>{
        // boxtext[e[0]]==boxtext[e[1]]==boxtext[e[2]] -> not this , 
        // boxtext[e[0]] -> e[0]th boxtext -> e[0] means accesing first element for 1st array 
        if(  (boxtext[e[0]].innerText!=='') &&                                     // writting !boxtext - not correct 
         (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&                  // it wont be innerHTML
           (boxtext[e[1]].innerText === boxtext[e[2]].innerText) ){

            if(playGame){                                                         // used because next chkwin call pe ${turn} ki value change na ho  or use can use boxtext[e[1]].innerText instead
            document.getElementById('info').innerHTML= `${turn} won !!!`              // jiski last turn thi , ${turn} won - writting this not correct as turn change
              boxtext[e[0]].style.textDecoration = "line-through"
              boxtext[e[1]].style.textDecoration = "line-through"
              boxtext[e[2]].style.textDecoration = "line-through"
              gameOver.play();
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "17rem" 
            //   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display= "block" 
            } 
            playGame= false;  
            
        }
        
    })
}

let value = false;


 // GAME LOGIC 

let boxes=document.getElementsByClassName('box');
// let boxtext1= document.getElementsByClassName('boxtext')
console.log(boxes)
// boxtext1.innerHTML='1';
// console.log(boxtext1[0]);

function play(){
Array.from(boxes).forEach((mybox)=>{
    let boxtext= mybox.getElementsByClassName('boxtext')[0]
    mybox.addEventListener('click', ()=>{
        if(boxtext.innerText== ``){
            boxtext.innerText = turn;
            turnTune.play();
            chkwin();
            turn= changeTurn();
            // value= true;
        }
        if(playGame==true)
        document.getElementById('info').innerHTML=`Turn for ${turn}`;
    
    })
    })
}
play();


// async function tie(){
//      play;
//      let boxtext=document.querySelectorAll('.boxtext') 
//      Array.from(boxtext).forEach((text)=>{
//         if(playGame && text.innerHTML!= '' ){
//             value = true;
//         }
//         if(value)
//         document.getElementById('info').innerHTML= `OOPS !!! It's a Tie..` 
//     console.log("hello");
//     })

// console.log(playGame);
// }



// RESET 
const reset= document.getElementById('reset')
reset.addEventListener('click', function(){
    let boxtext= document.getElementsByClassName('boxtext')
    Array.from(boxtext).forEach((content)=>{
        content.innerText='';
        content.style.textDecoration = "none"
})
document.getElementById('info').innerHTML=`Turn for X`;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= "0rem" 
playGame=true;

})
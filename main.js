let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let turn0=true;
let newGamebtn=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]
let counter=0;
boxes.forEach((boxe)=>{
    boxe.addEventListener("click",()=>{
        if(turn0)
        { 
            boxe.innerText="0";
            boxe.classList.add("color_0");
            turn0=false;
        }
        else
        {
            boxe.innerText="X";
            boxe.classList.add("color_x");
            turn0=true;
        }
        boxe.disabled=true;
        let iscomplete;
        iscomplete=checkWinner();
        counter++;
  
        
        if(iscomplete==false && counter===9)
        {
            msg.innerText=`Game Draw`;
            msgContainer.classList.remove("hide");
        }
      
    })
})
const Enableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
const resetGame=()=>{
    counter=0;
    turn0=true;
    msgContainer.classList.add("hide");
    Enableboxes();
  

}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener(("click"),resetGame);

const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    let winner=false;
    for(let pattern of winPatterns)
    {  let pos1text=boxes[pattern[0]].innerText;
        let pos2text=boxes[pattern[1]].innerText;
        let pos3text=boxes[pattern[2]].innerText;
        if(pos1text!="" && pos2text!="" && pos3text!="")
        {
            if(pos1text===pos2text && pos2text===pos3text)
            {
                
                showWinner(pos1text);
                winner=true;
                return winner;
            }
           
        }
    }
    return winner
}
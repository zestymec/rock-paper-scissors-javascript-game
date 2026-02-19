let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('.msg');
const userchoice = document.querySelector('.userchoice');
const computerchoice = document.querySelector('.computerchoice');
const userScorepara = document.querySelector('#userscore');
const computerScorepara = document.querySelector('#computerscore');


const gencompChoice = (compgame) => {
    const options = ["rockimage", "paperimage", "scissorimage"]
    const randomindx = Math.floor(Math.random() * 3)
    return options[randomindx];
}

const playgames = (userchoice) => {
    console.log("userchoice", userchoice);
    
}
const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("user win")
        msg.innerText = "Congratulation! You win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        computerScorepara.innerText = compScore;
        console.log("comp win")
        msg.innerText = "Comp win";
        msg.style.backgroundColor = "red";
    }
}
const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "blue";
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        console.log("clicked", userchoice);
        const compchoice = gencompChoice();
        console.log("compchoice", compchoice);
        if (compchoice === userchoice) {
            drawgame();
        } else {
            let userwin = true;
            if (userchoice === "rockimage") {
                userwin = compchoice === "paperimage" ? false : true;
            } else if (userchoice === "paperimage") {
                userwin = compchoice === "scissorimage" ? false : true;

            }
            else {
                userwin = compchoice === "rockimage" ? false : true;
            }showWinner(userwin);
        }
        
    })
})


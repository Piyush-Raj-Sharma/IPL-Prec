let btn = document.querySelector('.changeBtn');
let box = document.querySelector('.box');

function changeColor(){
    let red = Math.trunc(Math.random() * 256);
    let green = Math.trunc(Math.random() * 256);
    let blue = Math.trunc(Math.random() * 256);

    // console.log(red + " " + green + " " + blue); // to check the values

    box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

// btn.addEventListener('click', changeColor);



const team = ['MI', 'CSK', 'RR', 'RCB', 'SRH', 'DC', 'LSG', 'KKR', 'PKBS', 'GT'];

let display = document.querySelector('h1');
let guessBtn = document.querySelector('.iplBtn');

function guessWinner(){
    let winnerId = Math.trunc(Math.random() * team.length);
    console.log(winnerId);
    
    let winnerName = team[winnerId];
    display.innerHTML = `🏆 ${winnerName} 🏆`;;
}

guessBtn.addEventListener('click', guessWinner);
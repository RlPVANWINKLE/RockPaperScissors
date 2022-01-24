document.getElementById('rock').addEventListener("click", function(){sub('rock')})
document.getElementById('paper').addEventListener('click', function(){sub('paper')})
document.getElementById('scissors').addEventListener('click', function(){sub('scissors')})
function sub(userchoice){
    let random = Math.floor(Math.random() * 3)
    let choices = ['rock', 'paper', 'scissors']
    let pcChoice = choices[random]

    if(userchoice === 'rock' && pcChoice === 'scissors'){
        win()
        
    }
    else if(userchoice === 'paper' && pcChoice === 'rock'){
        win()
    }
    else if(userchoice === 'scissors' && pcChoice === 'paper'){
        win()
    }
    else if(userchoice === pcChoice){
        alert('Its a Tie')
    }
    else{
        alert('You lose')
    }

    function win(){alert('You win!')}


}


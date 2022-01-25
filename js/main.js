document.getElementById('rock').addEventListener("click", function(){sub('rock')})
document.getElementById('paper').addEventListener('click', function(){sub('paper')})
document.getElementById('scissors').addEventListener('click', function(){sub('scissors')})
let userScore = 0;
let pcScore = 0;
function sub(userchoice){
    let random = Math.floor(Math.random() * 3)
    let choices = ['rock', 'paper', 'scissors']
    let pcChoice = choices[random]

    if(userchoice =='rock'){
        document.getElementById('you').src="images/rock.jpg"
    }
    else if(userchoice =='paper'){
        document.getElementById('you').src="images/paper.jpg"
    }
    else if(userchoice =='scissors'){
        document.getElementById('you').src="images/scissors.jpg"
    }
    if(pcChoice =='rock'){
        document.getElementById('PC').src="images/rock.jpg"
    }
    else if(pcChoice =='paper'){
        document.getElementById('PC').src="images/paper.jpg"
    }
    else if(pcChoice =='scissors'){
        document.getElementById('PC').src="images/scissors.jpg"
    }
    <!-- decisions-->
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
        document.getElementById('results').textContent = "Its a tie!"
    }
    else{
        lose()
    }

    function win(){
        userScore++
        document.getElementById('results').textContent = "You Win!";
        document.getElementById('userScore').textContent = "You: "+ userScore;

        
    }
    function lose(){
        pcScore++
        document.getElementById('results').textContent = "You Lose!";
        document.getElementById('userScore').textContent = "You: "+ pcScore;

        
    }


}


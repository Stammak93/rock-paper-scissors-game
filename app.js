// The game

let choice;

optionEls.forEach((option) =>{
    option.addEventListener("click", function(e) {
            
        if (e.target.parentElement.id === 'paper') {
            choice = 0
        } else if (e.target.parentElement.id === 'rock') {
            choice = 1
        } else {
            choice = 2
        }
        
        let player = registerPlayerChoice(choice)
        let npc = registerNpcChoice()
        processResult(choicesObject,player)
        processResult(choicesObject,npc)
        hideImages()
        
        
        if (choicesObject[player] === 1) {
            textEl.textContent = `${player} beats ${npc}. You win!`
        } else if (choicesObject[player] === 0) {
            textEl.textContent = `${player} doesn't beat ${npc}. You lose!`
        } else {
            textEl.textContent = "It's a tie!"
        }

        createReplayButton()

        document.querySelector("button.replay-button").addEventListener("click", function(e) {
            location.reload()
        })
        
    })
})
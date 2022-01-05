let choicesObject = {
    "Paper":0,
    "Rock":0,
    "Scissors":0
}


let textEl = document.querySelector("div#text")
let playerEl = document.querySelector("div#player")
let npcEl = document.querySelector("div#npc")
let optionEls = document.querySelectorAll("div.option")
let imageOne = optionEls[0].getElementsByTagName("img")[0].src
let imageTwo = optionEls[1].getElementsByTagName("img")[0].src
let imageThree = optionEls[2].getElementsByTagName("img")[0].src


const hideImages = () => {
    let optionEls = document.querySelectorAll("div.option")

    optionEls.forEach((option) => {
        option.style.display = 'none'
    })
}


const processResult = (choices,player) => {

    for(let key in choices) {
        if(key === player) {
            choices[key] += 1
        }
    }

    if (player === "Paper") {
        choices["Rock"] -= 1
    } else if (player === "Rock") {
        choices["Scissors"] -= 1
    } else {
        choices["Paper"] -= 1
    }

}


const registerNpcChoice = () => {

    let choice = Math.floor(Math.random()*3)
    let npc = ""

    if (choice === 0) {
        npc += "Paper"
        npcEl.getElementsByTagName("img")[0].src = imageOne
    } else if (choice === 1) {
        npc += "Rock"
        npcEl.getElementsByTagName("img")[0].src = imageTwo
    } else {
        npc += "Scissors"
        npcEl.getElementsByTagName("img")[0].src = imageThree
    }
    
    return npc
}


const registerPlayerChoice = (choice) => {
    
    let player = ""
        
    if (choice === 0) {
        player += "Paper"
        playerEl.getElementsByTagName("img")[0].src = imageOne
    } else if (choice === 1) {
        player += "Rock"
        playerEl.getElementsByTagName("img")[0].src = imageTwo
    } else {
        player += "Scissors"
        playerEl.getElementsByTagName("img")[0].src = imageThree
    }
    
    return player
}
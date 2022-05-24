"use strict"

//Renders the page by checking certain conditions
const renderPage = function(){
    guessesLabel.textContent = hangmanGame.displayGuesses()
    guessesLeftLabel.textContent = hangmanGame.allowedMiss
    messageBox.textContent = displayMssg
    statusLabel.textContent = hangmanGame.checkStatus()
    wordLabel.innerHTML = ""
    hangmanGame.puzzle.forEach((letter)=>{
        const newEl = document.createElement("span")
        newEl.textContent = letter
        wordLabel.appendChild(newEl)
    })
    if(hangmanGame.status !== "playing"){
        runEndGame(hangmanGame.status)
    }
}

const setWord = async () => {
    const guessCount = setGuessTextBox.value
    let word 
    await getPuzzle(`${guessCount}`).then((puzzle)=>{
        word = puzzle
    }).catch((err)=>{
        console.log(err)
    })
    const temp = await word.split(" ")
    const guesses = await getGuessAllowed(temp.length)
    return await new Hangman(word, guesses)
}

const getGuessAllowed = (len)=>{
    if(len === 1){return len + 3}
    else if(len === 2){return len + 3}
    else if(len === 3){return len + 2}
    else if(len === 4){return len + 2}
    else if(len === 5){return len + 1}
    else if(len === 6){return len + 1}
    else if(len === 7){return len}
    else{return len}
}

const runEndGame = function(status) {
    //Check to see if the status is equal to win
    if(status === "win"){
        messageBox.textContent = `Good job! You guessed ${hangmanGame.word.join("")}` 
    }else{
        messageBox.textContent = `Nice try! The word was ${hangmanGame.word.join("")}`
    }
}

const startGame = async ()=>{
    hangmanGame = await setWord()
    renderPage()
}





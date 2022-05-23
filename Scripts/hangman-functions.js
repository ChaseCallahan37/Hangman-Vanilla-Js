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
    let word 
    await getPuzzle(4).then((puzzle)=>{
        word = puzzle
    }).catch((err)=>{
        console.log(err)
    })
    const temp = await word.split(" ")
    const guesses = await temp.length
    return await new Hangman(word, guesses)
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





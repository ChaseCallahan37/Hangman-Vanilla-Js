"use strict"

class Hangman {
    constructor(word, allowedMiss){
        this.word = word.toLowerCase().split("")
        this.allowedMiss = allowedMiss
        this.lettersGuessed = []
        this.status = "playing"
    }
    set puzzle(word){
        this.word = word.toLowerCase().split("")
    }
    get puzzle(){
        let toPrint = []
        this.word.forEach((letter)=>{
        if(this.lettersGuessed.includes(letter)){
            toPrint.push(letter)
        }else letter === " " ? toPrint.push("  ") : toPrint.push("*")
        })
        return toPrint
    }
    guessesToString(){
        let toString = ""
        this.lettersGuessed.forEach(function(letter){
        toString += letter
        })
        return toString
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        if(guess.length > 1){
            return "Please only guess one letter"
        }else{
            if(this.lettersGuessed.includes(guess)){
                return `You have already guessed ${guess}`
            }else if(this.word.includes(guess)){
                this.lettersGuessed.push(guess)
                return `You guessed correctly!`
            }else{
                this.allowedMiss--
                this.lettersGuessed.push(guess)
                return `You guessed incorrectly!`
            }
        }
    }
    displayGuesses(){
        return this.lettersGuessed.join()
    }
    checkStatus(){
        const misses = this.allowedMiss
        if(misses > 0){
            if(!this.puzzle.includes("*")){
                this.status = "win"
            }
        }else{
            this.status = "failed"
        }   
        return this.status
    }
}

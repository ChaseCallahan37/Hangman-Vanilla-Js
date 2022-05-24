"use strict"

//HTTP (Hypertext Transfer Protocol)
//Request - what do we want to do
//Response - what we receive

let displayMssg = ""

let hangmanGame

const wordLabel = document.querySelector("#word-progress")

const guessesLabel = document.querySelector("#guessed-letters")

const messageBox = document.querySelector("#message-box")

const statusLabel = document.querySelector("#status-label")

const guessesLeftLabel = document.querySelector("#guesses-left")

const resetButton = document.querySelector("#reset-button")

const guessTextBox = document.querySelector("#guess-text-box")

const setGuessTextBox = document.querySelector("#set-wordcount-txt")

// const guessSubmitButton = document.querySelector("#guess-submit-button")


//World event looking for the user to enter any key
// window.addEventListener("keypress", (e) =>{
//     const guess = String.fromCharCode(e.charCode)
//     if(hangmanGame.status === "playing"){
//         displayMssg = hangmanGame.makeGuess(guess)
//         renderPage()
//     }    
// })

// setGuessTextBox.addEventListener("input", (e)=>{
//     debugger
//     const txtVal = e.target.value
//     if(txtVal > 9 || typeof txtVal !== "number"){
//         debugger
//         e.target.value = ""
//     }
// })

guessTextBox.addEventListener("input", (e)=>{
    const guess = e.target.value
    if(hangmanGame.status === "playing"){
        displayMssg = hangmanGame.makeGuess(guess)
        renderPage()
        setTimeout(()=>{
            guessTextBox.value = ""
        }, 300)
    }  
})


resetButton.addEventListener("click", async ()=>{
    hangmanGame = await setWord()
    renderPage()
})

startGame()

// getPuzzle(4).then(()=>{

// },()=>{

// })

// puzzle.then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })

// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
//     if(response.status === 200){
//         return response.json()
//     }else{
//         throw new Error ("Unable to reach the puzzle")
//     }
// }).then((response2)=>{
//     console.log(response2.puzzle)
// }).catch((err)=>{
//     console.log(err)
// })

// getPuzzle.((error, puzzle) =>{
//     if(error){
//         console.log(`Error: ${error}`)
//     }else{
//         console.log(puzzle)
//     }  
//   })

//   getFin((error, myTraffic) =>{
//       if(error){
//           console.log(`You received an error: ${error}`)
//       }else{
//         console.log(myTraffic)
//       }
//   })

// const fin = getFin()

// fin.then((data) => {
//     data.forEach((dat)=>{
//         console.log(dat)
//     })
// }, () => {

// })

// fetch("http://puzzle.mead.io/puzzle").then((result)=>{
//     if(result.status === 200){
//         return result.json()
//     }else{
//         throw new Error("New Error")
//     }
// }).then((data)=>{
//     console.log(data.puzzle)
// }).catch((error)=>{
//     console.log(error)
// })

// getPuzzle(4).then((puzzle)=>{
//     console.log(puzzle)
// }).catch((err)=>{{
//     console.log(err)
// }})

// getFin().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// getLocation().then((data)=>{
//     return getGeoDb(data.country)
// }).then((data)=>{
//     data.forEach((country)=>{
//         console.log(`${country.name} is not equal to ${data.country}`)
//     })
// }).catch((err)=>{
//     console.log(err)
// })

// getLocation().then((data)=>{
//     console.log(data.country)
// }).catch((err)=>{
//     console.log(err)
// })

// getGeoDb().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// getAllCountries().then((countries)=>{
//     console.log(countries)
// }).catch((err)=>{
//     console.log((err))
// })






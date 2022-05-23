const getPuzzle = async (wordCount) =>{
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error("Could not get the puzzle")
    }
}

// const getPuzzleOld = (wordCount) =>{
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error("Something went wrong")
//         }
//     }).then((data)=>{
//         return data.puzzle
//     })
// }





// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener("readystatechange",(e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             resolve(`This is the puzzle : ${data.puzzle}`)
            
//         }else if(e.target.readyState === 4){
//             reject("An error has occured")
//         }
//     })

//     request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
//     })

// const getFin = () => {    
//     return fetch('http://puzzle.mead.io/puzzle').then((result)=>{
//         if(result.status === 200){
//             return result.json()
//         }else{
//             throw new Error("Could not get Fin Data")
//         }
//     }).then((data)=>{
//         return data.puzzle
//     })

// }

// const getGeoDb = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
//             'X-RapidAPI-Key': '1a2270fa5bmshea2b108a1cd4517p106a61jsn78101958dedf'
//         }
//     };
//     const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', options)
//     if(response.status === 200){
//         const data = await response.json()
//         return data.data
//     }else{
//         throw new Error("Could not access GeoDb")
//     }
// }

// const getGeoDbOld = (country) => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
//             'X-RapidAPI-Key': '1a2270fa5bmshea2b108a1cd4517p106a61jsn78101958dedf'
//         }
//     };
//     return fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', options).then((result)=>{
//         if(result.status === 200){
//             return result.json()
//         }else{
//             throw new Error("Could not access GeoDb")
//         }
//     }).then((data)=>{
//         // countryData = data.data
//         return data.data
        
//     })
// }

// const getLocation = async ()=>{
//     const response = await fetch("https://ipinfo.io/json?token=6c537ac1e9f094")
//     if(response.status === 200){
//         const data = await response.json()
//         return data
//     }else{
//         throw new Error("Could not get your location")
//     }
// }

// const getLocationOld = ()=>{
//     return fetch("https://ipinfo.io/json?token=6c537ac1e9f094").then((result)=>{
//         if(result.status === 200){
//             return result.json()
//         }else{
//             throw new Error("Could not get location")
//         }
//     })
// }

// const getAllCountries = async ()=>{
//     const myLoc = await getLocation()
//     const myPuzz = await getPuzzle(5)
//     const toPrint = `My country is ${myLoc.country} and my favorite puzzle is ${myPuzz}`
//     return toPrint
// }

// const request2 = new XMLHttpRequest("")

// request2.addEventListener("readystatechange", (e)=>{
//     if(e.target.readyState === 4 && e.target.status === 200){
//         let countries = JSON.parse(e.target.responseText)
//         const myCountry = countries.find(function(country){
//             return country.alpha2Code === `${id}`
//         })
//         callback(undefined, myCountry)
//     }else if(e.target.readyState === 4){
//         callback(new Error("Something went uh oh"), undefined)
//     }
    
// })
// request2.open("GET", "http://api.countrylayer.com/v2/all?access_key=8cdb9cc4b08fa29db511479c0c338ecc")
// request2.send()

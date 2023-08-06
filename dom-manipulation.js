let manipulateResult = document.getElementById("manipulateResult")
let manipulateBtn = document.getElementById("manipulateBtn")

function randomTextGen(){
    let textArr = [
        'January',
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July",
        "August",
        "September",
        "October"
    ]

    let randNum = Math.floor( Math.random() * textArr.length )
    while (randNum === previousNum) {
        randNum = Math.floor(Math.random() * textArr.length);
      }
    manipulateResult.innerText = textArr[randNum]
    previousNum = randNum
}

manipulateBtn.addEventListener('click', randomTextGen)
let previousNum = -1 
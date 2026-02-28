let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let firstPass = document.getElementById("first-Password")
let secondPass = document.getElementById("second-Password")
let thirdPass = document.getElementById("third-Password")
let fourthPass = document.getElementById("fourth-Password")
let generatePass = document.getElementById("generate")
let selectLength = document.getElementById("length")
let includeNumbers = document.getElementById("includeNumbers")
let includeSymbols = document.getElementById("includeSymbols")

function create() {
    let pass = ""
    let selectedLength = selectLength.value
    let allowedChars = [...letters]
    
    if(includeNumbers.checked) {
        allowedChars = allowedChars.concat(numbers)
    } 
    if(includeSymbols.checked) {
        allowedChars = allowedChars.concat(symbols)
    }
    
    for (i = 0; i < selectedLength; i++) {
        pass += allowedChars[Math.floor(Math.random() * allowedChars.length)]
    }
    return pass
}

generatePass.addEventListener("click", function() {
    firstPass.textContent = create()
    secondPass.textContent = create()
    thirdPass.textContent = create()
    fourthPass.textContent = create()

})

function copyFirst() {
    let firstToCopy = firstPass.textContent
    navigator.clipboard.writeText(firstToCopy)
    alert("You have copied: " + firstToCopy)
}

function copySecond() {
    let secondToCopy = secondPass.textContent
    navigator.clipboard.writeText(secondToCopy)
    alert("You have copied: " + secondToCopy)
}

function copyThird() {
    let thirdToCopy = thirdPass.textContent
    navigator.clipboard.writeText(thirdToCopy)
    alert("You have copied: " + thirdToCopy)
}

function copyFourth() {
    let fourthToCopy = fourthPass.textContent
    navigator.clipboard.writeText(fourthToCopy)
    alert("You have copied: " + fourthToCopy)
}

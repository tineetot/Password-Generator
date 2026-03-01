
// password length feature
let selectLength = document.getElementById("length")

// assigning variables for the necessary arrays for the toggle feature
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let includeNumbers = document.getElementById("includeNumbers")
let includeSymbols = document.getElementById("includeSymbols")

// the generate password variables
let generatePass = document.getElementById("generate")
let firstPass = document.getElementById("first-Password")
let secondPass = document.getElementById("second-Password")
let thirdPass = document.getElementById("third-Password")
let fourthPass = document.getElementById("fourth-Password")

// function that will generate a password based on the user's preference
function create() {
    // create an empty string for the pass, then eventually will get reaassigned once all the
    // features are considered
    let pass = ""
    // the value of the selected length from the user is parsed
    let selectedLength = selectLength.value // e.g. if the 9 was chosen, selectedLength = "12" 
    let allowedChars = [...letters] // the [... letters creates a copy so that it can be modified]
    
    // using if/if, instead of if/else, in case the user toggled on both features it will show both
    if(includeNumbers.checked) {
        // concatening the variable (numbers) inside the allowedChars array
        allowedChars = allowedChars.concat(numbers)
    } 
    if(includeSymbols.checked) {
        allowedChars = allowedChars.concat(symbols)
    }
    
    // repeating the generating of letters from pass until they reach the specific length preferred by the user
    for (i = 0; i < selectedLength; i++) {
        pass += allowedChars[Math.floor(Math.random() * allowedChars.length)]
    }
    // return the current state of the password so it will display
    return pass
}

// "click" is an event type while function() looks for code to run
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

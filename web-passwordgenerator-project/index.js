// Random character SET
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\"
const nonSymbolChar = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890")

// copy button
const copyButtonOne = document.getElementById("copy-btn-1")
const copyButtonTwo = document.getElementById("copy-btn-2")

// tweak popup
const form = document.querySelector('form');
const tweaks = document.getElementById("tweaks-el")
const dialog = document.getElementById("dialog")

// password page
const pswrdPage = document.getElementById("genPswrdPage")

// assin  op 1 to 1st space  // op2 to 2nd space
const outputOne = document.getElementById("output-1")
const outputTwo = document.getElementById("output-2")

// tweaks  vars
let passwordLength = 15
let avoidCharacters = ""
let avoidSymbols = false

//this function generate a random num range of "passwordlength" value characters
//for 1st password
function passWordGenerator() {
    let passWord = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNumGen = Math.floor(Math.random() * characters.length)
        let randChar = characters[randomNumGen]
        let count = 0
        let index = passWord.indexOf(randChar)

        // condition paswd shouldn't start with -, _, . according to IBM
        while (passWord.length == 0 && (randChar == '-' || randChar == '.' || randChar == '_')) {
            randChar = characters[Math.floor(Math.random() * characters.length)]
        }

        // avoid symbols &  avoid characters
        while (avoidSymbols && symbols.includes(randChar) || avoidCharacters.includes(randChar)) {
            randChar = characters[Math.floor(Math.random() * characters.length)]
        }

        // making sure character would repeat more than 2 times
        while (index != -1) {
            count++
            index = passWord.indexOf(randChar, index + 1)
            if (count > 1) {
                let i = 0
                while (true) {
                    let tempChar = characters[Math.floor(Math.random() * characters.length)]
                    if (randChar != tempChar && !avoidCharacters.includes(randChar) && (avoidSymbols && symbols.includes(randChar))) {
                        randChar = tempChar
                        break
                    }
                    if(i++ == 1000){
                        break
                    }
                }
            }
        }
        passWord += (randChar)
    }
    return passWord
}

//log the gen pass when click the generate btn
function paswrdGenBtn() {
    outputOne.value = passWordGenerator()
    outputTwo.value = passWordGenerator()
}

// copy paswrd 1 to clipboard
copyButtonOne.addEventListener('click', function () {
    navigator.clipboard.writeText(outputOne.value)
    toast("Copied to clipbroad")
})

// copy paswrd 2 to clipboard
copyButtonTwo.addEventListener('click', function () {
    navigator.clipboard.writeText(outputTwo.value)
    toast("Copied to clipbroad")
})
/*
// caller function to change title color on set interval
document.addEventListener('DOMContentLoaded', function () {
    changingTitleColor()
    setInterval(changingTitleColor, 1000);
});

// Function to change title color RGB
function changingTitleColor() {
    let title = document.getElementById("title")
    title.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16) // generate hex code for colors
}
*/
// function to display little toast when copied
function toast(message) {
    var x = document.getElementById("toast");
    x.innerText = message
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

// toggle pop up
tweaks.addEventListener('click', (event) => {
    dialog.style.display= "flex";
    pswrdPage.style.display= "none";
})

// on save get values
form.addEventListener('submit', function (event) {
    passwordLength = document.getElementById("passwordlen").value
    avoidCharacters = document.getElementById("avoidchar").value
    avoidSymbols = document.getElementById("avoidsym").checked
})

// validate password value
function ValidatePasswordLength(){
    const passlen = document.forms["tweaks"]["passwordlen"].value
    const avoidCharSet = new Set(document.forms["tweaks"]["avoidchar"].value)
    const commonSet = new Set([...avoidCharSet].filter(x => nonSymbolChar.has(x)))
    if(passlen < 8 || passlen > 64){
        toast("Password Length should be between 8 - 64")
        return false
    }
    if(commonSet.size > 0){
        toast("Avoid characters cannot contain Alphanumeric[a-zA-Z0-9]")
        return false
    }
    if((passlen > 7 || passlen < 65)&& commonSet.size == 0){
        dialog.style.display= "none";
        pswrdPage.style.display= "flex";
    }
}
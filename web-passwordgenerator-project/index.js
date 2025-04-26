// Random character SET
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\";
let copyButtonOne=document.getElementById("copy-btn-1")
let copyButtonTwo=document.getElementById("copy-btn-2")

// assin  op 1 to 1st space  // op2 to 2nd space
let outputOne=document.getElementById("output-1")
let outputTwo=document.getElementById("output-2")

//this function generate a random num range of 15 characters
//for 1st password
function passWordGeneratorOne(){
    let passWordOne=""
    for (let i=0 ; i<15 ; i++){
        let randomNumGenOne=Math.floor(Math.random()*characters.length)
        let randNumOne=characters[randomNumGenOne]
        // condition paswd shouldn't start with - according to IBM
        while(randNumOne == '-'){
            randNumOne = characters[Math.floor(Math.random()*characters.length)]
        }
        passWordOne+=(randNumOne)
    }
    return passWordOne
}

//illy
function passWordGeneratorTwo(){
    let passWordTwo=""
    for (let i=0 ; i<15 ; i++){
        let randomNumGenTwo=Math.floor(Math.random()*characters.length)
        let randNumTwo=characters[randomNumGenTwo]
        // condition paswd shouldn't start with - according to IBM
        while(randNumTwo == '-'){
            randNumTwo = characters[Math.floor(Math.random()*characters.length)]
        }
        passWordTwo+=(randNumTwo)
    }
    return passWordTwo
}

//log the gen pass when click the generate btn
function paswrdGenBtn(){
    outputOne.value=passWordGeneratorOne()
    outputTwo.value=passWordGeneratorTwo()
}

copyButtonOne.addEventListener('click', function(){
    navigator.clipboard.writeText(outputOne.value)
})

copyButtonTwo.addEventListener('click',function() {
    navigator.clipboard.writeText(outputTwo.value)
    console.log(outputTwo.value)
})

// caller function to change title color on set interval
document.addEventListener('DOMContentLoaded', function() {
    changingTitleColor()
    setInterval(changingTitleColor, 1000);
 });

 // Function to change title color RGB
 function changingTitleColor(){
    let title = document.getElementById("title")
    title.style.color = "#"+Math.floor(Math.random()*16777215).toString(16) // generate hex code for colors
 }
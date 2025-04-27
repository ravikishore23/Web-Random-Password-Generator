// Random character SET
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\";

// copy button
const copyButtonOne=document.getElementById("copy-btn-1")
const copyButtonTwo=document.getElementById("copy-btn-2")

// tweak popup
const tweaks = document.getElementById("tweaks-el")
const dialog = document.getElementById("dialog")

// assin  op 1 to 1st space  // op2 to 2nd space
const outputOne=document.getElementById("output-1")
const outputTwo=document.getElementById("output-2")

// tweaks  vars
let passwordlength = 15
let avoidchar = ""
let avoidsym = false

//this function generate a random num range of "passwordlength" value characters
//for 1st password
function passWordGeneratorOne(){
    let passWordOne=""
    for (let i=0 ; i<passwordlength ; i++){
        let randomNumGenOne=Math.floor(Math.random()*characters.length)
        let randCharOne=characters[randomNumGenOne]
        let count = 0
        let index = passWordOne.indexOf(randCharOne)

        // condition paswd shouldn't start with -, _, . according to IBM
        while(randCharOne == '-' || randCharOne == '.' || randCharOne == '_'){
            randCharOne = characters[Math.floor(Math.random()*characters.length)]
        }

        // making sure character would repeat more than 2 times
        while(index != -1){
            count++
            index = passWordOne.indexOf(randCharOne, index + 1)
            if(count > 1){
                while(true){
                    let tempChar = characters[Math.floor(Math.random()*characters.length)]
                    if(randCharOne != tempChar){
                        randCharOne = tempChar
                        break
                    }
                }
                break
            }
        }
        passWordOne+=(randCharOne)
    }
    return passWordOne
}

//for 2st password
function passWordGeneratorTwo(){
    let passWordTwo=""
    for (let i=0 ; i<passwordlength ; i++){
        let randomNumGenTwo=Math.floor(Math.random()*characters.length)
        let randCharTwo=characters[randomNumGenTwo]
        let count = 0
        let index = passWordTwo.indexOf(randCharTwo)
        // condition paswd shouldn't start with -, _, . according to IBM
        while(randCharTwo == '-' || randCharTwo == '.' || randCharTwo == '_'){
            randCharTwo = characters[Math.floor(Math.random()*characters.length)]
        }
        // making sure character would repeat more than 2 times
        while(index != -1){
            count++
            index = passWordTwo.indexOf(randCharTwo, index + 1)
            if(count > 1){
                while(true){
                    let tempChar = characters[Math.floor(Math.random()*characters.length)]
                    if(randCharTwo != tempChar){
                        randCharTwo = tempChar
                        break
                    }
                }
                break
            }
        }
        passWordTwo+=(randCharTwo)
    }
    return passWordTwo 
}

//log the gen pass when click the generate btn
function paswrdGenBtn(){
    outputOne.value=passWordGeneratorOne()
    outputTwo.value=passWordGeneratorTwo()
}

// copy paswrd 1 to clipboard
copyButtonOne.addEventListener('click', function(){
    navigator.clipboard.writeText(outputOne.value)
    toast()
})

// copy paswrd 2 to clipboard
copyButtonTwo.addEventListener('click',function() {
    navigator.clipboard.writeText(outputTwo.value)
    toast()
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

 // function to display little toast when copied
 function toast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// toggle pop up
tweaks.addEventListener( 'click' , (event)=>{
        dialog.showModal();
})

// on save get values
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    passwordlength = document.getElementById("passwordlen").value
    avoidchar = document.getElementById("avoidchar").value
    avoidsym = document.getElementById("avoidsym").checked
})



//Random character sets
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
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

copyButtonTwo.addEventListener( 'click ' ,function() {
    navigator.clipboard.writeText(outputTwo.value)

})




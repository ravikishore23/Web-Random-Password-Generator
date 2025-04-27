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

function passWordGeneratorTwo(){
    let passWordTwo=""
    for (let i=0 ; i<15 ; i++){
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

copyButtonOne.addEventListener('click', function(){
    navigator.clipboard.writeText(outputOne.value)
})

copyButtonTwo.addEventListener( 'click ' ,function() {
    copyButtonTwo.navigator.writeText(outputTwo.value)

})




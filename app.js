let display= document.getElementById("display")
let button = document.querySelectorAll(".btn")
button.forEach((item) => {
    item.addEventListener("click",() => {
        if(item.innerText == "del"){
            let displayValue = display.value.split("")
            displayValue.pop()
            let newDisplay = displayValue.join("")
            display.value = newDisplay
            return
        }
        if(item.innerText === "="){            
            try{                
                let result = parseFloat(eval(display.value))          
                display.value = result
                return
            }catch{
                display.value = display.value
                return
            }
        }
        if(item.innerText === "C"){        
            display.value = ""
            return           
        }
        display.value += item.innerText        
    })
})
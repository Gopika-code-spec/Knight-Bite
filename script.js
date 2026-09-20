let screen=document.querySelector(".screen input")
let buttons = document.querySelectorAll(".btn")

// get text from the buttons
buttons.forEach((button) => {
    button.onclick=() => {
        screen.value += button.innerText
        
    }
})

//equals btn
let equalsBtn = document.getElementById("equals-btn");
equalsBtn.onclick = () => {
    let result = eval(screen.value)//evaluate the expressions
    screen.value = result
}

//allclear
let allclearBtn = document.getElementById("allclear-btn");
allclearBtn.title = "double click to clear"
allclearBtn.ondblclick = () => {
    screen.value = ""
}

//clear
let clearBtn=document.getElementById("clear-btn")
clearBtn.onclick = () => {
    let result = screen.value
    screen.value = result.slice(0,-1)//-1 or length-1
}
let red = document.getElementsByClassName('red')[0]
let blue = document.querySelector('.blue')
let orange = document.querySelector('.orange')
let black = document.querySelector('.black')
let result = document.querySelector('.result')

if(window.localStorage.getItem('color')){
    result.style.backgroundColor = window.localStorage.getItem('color')
}

red.addEventListener('click',()=>{
    result.style.backgroundColor = 'red'
    window.localStorage.color = result.style.backgroundColor
})

blue.addEventListener('click',()=>{
    result.style.backgroundColor = 'blue'
    window.localStorage.color = result.style.backgroundColor
})

orange.addEventListener('click',()=>{
    result.style.backgroundColor = 'orange'
    window.localStorage.color = result.style.backgroundColor

})

black.addEventListener('click',()=>{
    result.style.backgroundColor = 'black'
    window.localStorage.color = result.style.backgroundColor

})
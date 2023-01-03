let num = document.getElementsByClassName('num')[0]
let txt = document.getElementsByClassName('text')[0]
let result = document.createTextNode('')
let btn = document.querySelector('button')
let div = document.createElement('div')

let z = 0
num.addEventListener('change',()=>{
    z =  num.value
})

let f 
txt.addEventListener('change',()=>{
    result = txt.value    
    
})


btn.addEventListener('click',()=>{
    for(i=0;i<z;i++){
        let para = document.createElement('h3')
        para.append(result)
        div.append(para)
    } 
})


document.body.append(div)
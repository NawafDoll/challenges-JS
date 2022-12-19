let a =prompt("Ary yuo sure?")
let f = a.split("-")
let one = +f[0]
let two = +f[1]

let page = document.createElement('h1')
let result = document.createElement('h3')
let br  = document.createElement('br')

page.append(a)



   let count = setInterval(() => {
        result.append(" _ ",one = one+1)
        result.append(br)
        
        if(one === two){
            clearInterval(count)
            }
    }, 1000);
    


document.body.append(page)
document.body.append(br)
document.body.append(result)
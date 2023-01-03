let parent = document.getElementsByClassName('parent2')[0]
let divUsers = document.getElementsByClassName('users')[0]

let title
let body
function req(num){
        let req = new XMLHttpRequest();
        req.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${num}`)
        req.send()
        req.onload = function(){
        let res = JSON.parse(req.responseText)
        console.log(res)
        parent.innerHTML = ``
        for(i=0;i<10;i++){
            let result = document.createElement('div')
            result.setAttribute('class','first')
            let h = document.createElement('h3')
            h.setAttribute('class','h')
            let p = document.createElement('p')
            p.setAttribute('class','p')
            title = document.createTextNode(res[i].title)
            body = document.createTextNode(res[i].body)
            h.innerHTML = res[i].title
            p.append(body)
            result.append(h)
            result.append(p)
            parent.append(result)
        }}
}


function getUsers(){
    let req = new XMLHttpRequest();
        req.open("GET",`https://jsonplaceholder.typicode.com/users`)
        req.send()
        req.onload = function(){
        let res = JSON.parse(req.responseText)
        console.log(res)
            if(req.status >= 200 && req.readyState === 4){
                for(i=0;i<10;i++){
                    let h4 = document.createElement('h4')
                    h4.setAttribute('class','name')
                    let p = document.createElement('p')
                    p.setAttribute('class','email')
                     let div = document.createElement('div');
                    div.setAttribute('class','co');
                    div.setAttribute('onclick',`uClick(${res[i].id})`)
                    let name = document.createTextNode(res[i].name)
                    let email = document.createTextNode(res[i].email)
                    h4.append(name);
                    p.append(email);
                    div.append(h4);
                    div.append(p);
                    divUsers.append(div);
                }
               
            }
        }
       
}
getUsers()

function uClick(num){
    req(num)
}
let myreq = new XMLHttpRequest()
myreq.open("GET",'./json.txt')
myreq.send()
myreq.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        let res = JSON.parse( this.responseText)
        console.log(res)
        for(i=0;i<res.length;i++){
            let div =document.createElement('div')
            let h2 = document.createElement('h2')
            let title = document.createTextNode(`${res[i].title}`)
            let p = document.createElement('p')
            let body = document.createTextNode(res[i].body)
            let p2 = document.createElement('p')
            let names = document.createTextNode(`${Object.keys(res[i])[1]}: ${res[i].name}`)
            let p3 = document.createElement('p')
            let catgory = document.createTextNode(`${Object.keys(res[i])[4]}: ${res[i].catgory}`)

            h2.append(title)
            p.append(body)
            p2.append(names)
            p3.append(catgory)

            div.append(h2)
            div.append(p)
            div.append(p2)
            div.append(p3)

            document.body.append(div)
        }
    }
}
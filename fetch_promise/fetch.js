let myPromise = new Promise(async(res,rej)=>{
    fetch('./json2.txt').then(async (result)=>{
        let myData = await (result.json())
        if(myData.length > 0){
        res(myData)
        }else{
            rej("No")
        }
    })
})

myPromise.then((res)=>{
    for(i=0;i<res.length;i++){
        let div = document.createElement("div")
        let h3 = document.createElement('h3')
        let p =document.createElement('p')
        let text1 = document.createTextNode(res[i].title);
        let text2 = document.createTextNode(res[i].description);
        div.append(h3)
        div.append(p)
        h3.append(text1)
        p.append(text2)
        document.body.append(div)
    }
})
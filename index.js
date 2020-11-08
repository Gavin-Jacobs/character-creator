
// let statArr = []
let tempstat = {
    str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0
} 
let holdNum = 0
function statLines() {
    let statArr = []
    for (let i = 0; i < 3; i++) {
       statArr.push(Math.floor((Math.random()*6)+1))
       
       if(statArr.length>3){
           statArr=[]
       }

    }console.log(statArr)
    
    return addrolls(statArr)
}



function addrolls(statArr) {
    const [a,b,c]=statArr
    return holdNum = a+b+c
}

function stats(stat){
    for (let prop in stat) {
        if (stat.hasOwnProperty(prop)) {
            statLines()
            tempstat[prop] = holdNum  
        }
        
    }
}

stats(tempstat)
console.log(tempstat)

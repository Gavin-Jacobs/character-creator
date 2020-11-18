module.exports={
    statLines,
    make,
    nameChara,
    
}

let tempChara ={
    name:'',
    att: {
    str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0
    },
    mod:{
        str: 0,
        con: 0,
        dex: 0,
        int: 0,
        wis: 0,
        cha: 0
    },
    skills:{
        atheletics:0,
        acrobatics:0,
        arcana:0,
        animalHandling:0,
        insight:0,
        deception:0,
        intimidation:0,
        performance:0,
        persuasion:0,
        survival:0,
        nature:0,
        religion:0,
        perception:0,
        history:0,
        stealth:0,
        slightOfHand:0,
        medicine:0,
        investigation:0
    }
}
let holdArr = []
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
    for (let i = 0; i < 4; i++) {
       statArr.push(Math.floor((Math.random()*6)+1))

    }
    statArr.sort((a, b)=> a-b)
    statArr.shift()
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

function holdStats(arr){
    for (let i = 0; i < 6; i++) {
        arr.push(statLines())
        
    }
    console.log(arr)
    return arr
}


// stats(tempstat)
// console.log(chara)
// holdStats(holdArr)

function nameChara (name){
    return tempChara.name=name
}

function pickRollType(number){
    const empty={
        str: 0,
        con: 0,
        dex: 0,
        int: 0,
        wis: 0,
        cha: 0
    } 
    if(number===1){
        stats(tempstat)
        tempChara.att=tempstat
    }else if(number===2){
        holdStats(holdArr)
        console.log(holdArr)
        return holdArr=[]
    }
}

function make(name, number){
    nameChara(name)
    pickRollType(number)
    attMods(tempstat)
    loopSkills(tempChara.mod)
    // console.log(tempChara)
    return tempChara
}

function attMods(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            ifLoop(key, obj[key])
        }
        
    }
    function ifLoop(obj, number){
        if(number===1){
            return tempChara.mod[obj]=-5
        }else if(number>1 && number<4){
            return tempChara.mod[obj]=-4
        }else if(number>3 && number<6){
            return tempChara.mod[obj]=-3
        }else if(number>5 && number<8){
            return tempChara.mod[obj]=-2
        }else if(number>7 && number<10){
            return tempChara.mod[obj]=-1
        }else if(number>9 && number<12){
            return tempChara.mod[obj]=0
        }else if(number>11 && number<14){
            return tempChara.mod[obj]=+1
        }else if(number>13 && number<16){
            return tempChara.mod[obj]=+2
        }else if(number>15 && number<18){
            return tempChara.mod[obj]=+3
        }else if(number>17 && number<20){
            return tempChara.mod[obj]=+4
        }else if(number>19 && number<22){
            return tempChara.mod[obj]=+5
        }else if(number>21 && number<24){
            return tempChara.mod[obj]=+6
        }else if(number>23 && number<26){
            return tempChara.mod[obj]=+7
        }else if(number>25 && number<28){
            return tempChara.mod[obj]=+8
        }else if(number>27 && number<30){
            return tempChara.mod[obj]=+9
        }else if(number===30){
            return tempChara.mod[obj]=+10
        }
        // ((n-(n%2))/2)-5
    }

}
function loopSkills(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            setSkills(key, obj[key])
            
        }
    }
}

function setSkills(obj, number){
    if(obj==='str'){
        tempChara.skills.atheletics=number
    }else if(obj==='dex'){
        tempChara.skills.acrobatics=number
        tempChara.skills.slightOfHand=number
        tempChara.skills.stealth=number
    }else if(obj==='int'){
        tempChara.skills.arcana=number
        tempChara.skills.history=number
        tempChara.skills.investigation=number
        tempChara.skills.nature=number
        tempChara.skills.religion=number
    }else if(obj==='wis'){
        tempChara.skills.animalHandling=number
        tempChara.skills.insight=number
        tempChara.skills.medicine=number
        tempChara.skills.perception=number
        tempChara.skills.survival=number
    }else if(obj==='cha'){
        tempChara.skills.deception=number
        tempChara.skills.intimidation=number
        tempChara.skills.performance=number
        tempChara.skills.persuasion=number
    }else{
        return null
    }
}

module.exports={
    statLines,
    make,
    nameChara,
    take,
}

let tempChara ={
    name:'',    
    str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0
}
let mod ={
    str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0
}
let skills={
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
let tempstat = {
    str: 12,
    con: 12,
    dex: 12,
    int: 12,
    wis: 12,
    cha: 12
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
    return arr
}

function nameChara (name){
    return tempChara.name=name
}

function pickRollType(number){
    let holdArr = []
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
        tempChara.str=tempstat.str
        tempChara.con=tempstat.con
        tempChara.dex=tempstat.dex
        tempChara.int=tempstat.int
        tempChara.wis=tempstat.wis
        tempChara.cha=tempstat.cha
    }else if(number===2){
        holdStats(holdArr)
        return holdArr=[]
    }
}

function make(name, number){
    // console.log('here')
    nameChara(name)
    pickRollType(number)
    attMods(tempstat)
    loopSkills(mod)
    return [tempChara, mod, skills]
}

function take(chara){
    attMods(chara)
    loopSkills(mod)
    return [mod, skills]
}

function attMods(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            ifLoop(key, obj[key])
        }
        
    }
    function ifLoop(obj, number){
        if(number===1){
            return mod[obj]=-5
        }else if(number>1 && number<4){
            return mod[obj]=-4
        }else if(number>3 && number<6){
            return mod[obj]=-3
        }else if(number>5 && number<8){
            return mod[obj]=-2
        }else if(number>7 && number<10){
            return mod[obj]=-1
        }else if(number>9 && number<12){
            return mod[obj]=0
        }else if(number>11 && number<14){
            return mod[obj]=+1
        }else if(number>13 && number<16){
            return mod[obj]=+2
        }else if(number>15 && number<18){
            return mod[obj]=+3
        }else if(number>17 && number<20){
            return mod[obj]=+4
        }else if(number>19 && number<22){
            return mod[obj]=+5
        }else if(number>21 && number<24){
            return mod[obj]=+6
        }else if(number>23 && number<26){
            return mod[obj]=+7
        }else if(number>25 && number<28){
            return mod[obj]=+8
        }else if(number>27 && number<30){
            return mod[obj]=+9
        }else if(number===30){
            return mod[obj]=+10
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
        skills.atheletics=number
    }else if(obj==='dex'){
        skills.acrobatics=number
        skills.slightOfHand=number
        skills.stealth=number
    }else if(obj==='int'){
        skills.arcana=number
        skills.history=number
        skills.investigation=number
        skills.nature=number
        skills.religion=number
    }else if(obj==='wis'){
        skills.animalHandling=number
        skills.insight=number
        skills.medicine=number
        skills.perception=number
        skills.survival=number
    }else if(obj==='cha'){
        skills.deception=number
        skills.intimidation=number
        skills.performance=number
        skills.persuasion=number
    }else{
        return null
    }
}
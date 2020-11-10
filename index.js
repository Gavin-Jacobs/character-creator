// const chara = require('./characters/chara.js')
const prompt =require('prompt')
const fs = require ('fs')
const path = require('path')

let texts=[]

let tempChara ={
    name:'',
    att: {str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0
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
    for (let i = 0; i < 3; i++) {
       statArr.push(Math.floor((Math.random()*6)+1))

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
        return tempstat=empty
    }else if(number===2){
        holdStats(holdArr)
        console.log(holdArr)
        return holdArr=[]
    }
}

function make(name, number){
    nameChara(name)
    pickRollType(number)
    console.log(tempChara)
}

make('harry', 1)
import React from 'react'
import Mod from './Mods'
import Skills from './Skills'
import {getCharacters} from '../api'
import {take} from '../Dnd'

class Display extends React.Component{
    state = {
        character:{
            id: 1,
            name:'',
            str:undefined,
            con:undefined,
            dex:undefined,
            int:undefined,
            wis:undefined,
            cha:undefined
        },
        mod:{ 
            str:0,
            con:0,
            dex:0,
            int:0,
            wis:0,
            cha:0},
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
    recallChara = () => {
        const id = this.state.character.id
        
        getCharacters(id)
            .then(chara => this.setState({
                character: chara
            }))
            .then(()=>{
                const here = this.state.character
                const [mod, skills]=take(here)
                this.setState({
                    mod: mod,
                    skills: skills
            })
            })
    }
    changeHereNum = e =>{
        this.setState({
            character:{
                ...this.state.character,
            [e.target.name]: Number(e.target.value)}
        })
    }
    clickhere = () =>{
        console.log(this.state)
    }
    render(){
        return(
            <>
            <p>Id number: <input type="number" name='id' value={this.state.character.id} onChange={this.changeHereNum}/></p>
            <button onClick={this.recallChara}>retreve your character</button>
            <button>remove this character</button>
                <ul>
                    <li>Name: {this.state.character.name}</li>
                    <li>Str: <input type='number' value={this.state.character.str} name='str' onChange={this.changeHereNum} /></li>
                    <li>Con: <input type='number' value={this.state.character.con} name='con' onChange={this.changeHereNum} /></li>
                    <li>Dex: <input type='number' value={this.state.character.dex} name='dex' onChange={this.changeHereNum} /></li>
                    <li>Int: <input type='number' value={this.state.character.int} name='int' onChange={this.changeHereNum} /></li>
                    <li>Wis: <input type='number' value={this.state.character.wis} name='wis' onChange={this.changeHereNum} /></li>
                    <li>Cha: <input type='number' value={this.state.character.cha} name='cha' onChange={this.changeHereNum} /></li>
                </ul>
                <button onClick={this.clickhere}>update your character</button>
                <ul>
                    <Mod mods={this.state.mod}/>
                </ul>

                <ul>
                    <Skills skill={this.state.skills} />
                </ul>
            </>
        )
    }
}

export default Display
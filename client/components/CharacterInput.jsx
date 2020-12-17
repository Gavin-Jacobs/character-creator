import React from 'react'
import {take} from '../Dnd'
import {addPost} from '../api'
import Skills from './Skills'
import Mods from './Mods'
class Maker extends React.Component{
    state={
        character:{
            id:undefined,
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
            cha:0
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

    changeHere = e =>{
        this.setState({
            character:{
                ...this.state.character,
            [e.target.name]: e.target.value}
        })
    }
    changeHereNum = e =>{
        this.setState({
            character:{
                ...this.state.character,
            [e.target.name]: Number(e.target.value)}
        })
    }

    clickThing = () =>{
        const here = this.state.character
        const[mod, skills]=take(here)
        this.setState({
            mod: mod,
            skills: skills
        })
    }
    clickPost =(e) =>{
        e.preventDefault()
          addPost(this.state.character)
            .then(chara=> this.setState({character: chara}))
    }

    render(){
        const { mod, skills}=this.state
        return(
            <>
            <input type='text' name='name' value={this.state.character.name} onChange={this.changeHere}/>
            <ul>
                <li>Str: <input type='number' value={this.state.character.str} name='str' onChange={this.changeHereNum} /></li>
                <li>Con: <input type='number' value={this.state.character.con} name='con' onChange={this.changeHereNum} /></li>
                <li>Dex: <input type='number' value={this.state.character.dex} name='dex' onChange={this.changeHereNum} /></li>
                <li>Int: <input type='number' value={this.state.character.int} name='int' onChange={this.changeHereNum} /></li>
                <li>Wis: <input type='number' value={this.state.character.wis} name='wis' onChange={this.changeHereNum} /></li>
                <li>Cha: <input type='number' value={this.state.character.cha} name='cha' onChange={this.changeHereNum} /></li>
            </ul>
            <button onClick={this.clickThing}>generate character</button>
            <button onClick={this.clickPost}>save this character</button>
            <p>your id is: {this.state.character.id}<br/>remember it</p>
            <ul>
                <Mods mods={mod}/>
            </ul>

            <ul>
                <Skills skill={skills} />
            </ul>
            
            </>
        )
    }
}

export default Maker
import React from 'react'
import Mod from './Mods'
import Skills from './Skills'
import {getCharacters} from '../api'
class Display extends React.Component{
    state = {
        character:{
            id: 0,
            name:'',
            str:undefined,
            con:undefined,
            dex:undefined,
            int:undefined,
            wis:undefined,
            cha:undefined
        }
    }
    recallChara = () => {
        const id = this.state.character.id
        getCharacters(id)
            .then(chara => this.setState({
                character: chara
            }))
    }
    changeHereNum = e =>{
        this.setState({
            character:{
                ...this.state.character,
            [e.target.name]: Number(e.target.value)}
        })
    }
    render(){
        return(
            <>
            <p>Id number: <input type="number" name='id' value={this.state.character.id} onChange={this.changeHereNum}/></p>
            <button onClick={this.recallChara}>retreve your character</button>
                <ul>
                    <li>Name: {this.state.character.name}</li>
                    <li>Str: <input type='number' value={this.state.character.str} name='str' onChange={this.changeHereNum} /></li>
                    <li>Con: <input type='number' value={this.state.character.con} name='con' onChange={this.changeHereNum} /></li>
                    <li>Dex: <input type='number' value={this.state.character.dex} name='dex' onChange={this.changeHereNum} /></li>
                    <li>Int: <input type='number' value={this.state.character.int} name='int' onChange={this.changeHereNum} /></li>
                    <li>Wis: <input type='number' value={this.state.character.wis} name='wis' onChange={this.changeHereNum} /></li>
                    <li>Cha: <input type='number' value={this.state.character.cha} name='cha' onChange={this.changeHereNum} /></li>
                </ul>
                <button>update your character</button>
                <ul>
                    {/* <Mod mods='{this.mod}'/> */}
                </ul>

                <ul>
                    {/* <Skills skill='{this.skills}' /> */}
                </ul>
            </>
        )
    }
}

export default Display
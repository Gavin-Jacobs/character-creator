import React from 'react'

class Display extends React.Component{
    state = {
        character:{
            name:'',
            str:undefined,
            con:undefined,
            dex:undefined,
            int:undefined,
            wis:undefined,
            cha:undefined
        }
    }
    render(){
        return(
            <>
                <ul>
                    <li>Str: <input type='number' value={this.state.character.str} name='str' onChange={this.changeHereNum} /></li>
                    <li>Con: <input type='number' value={this.state.character.con} name='con' onChange={this.changeHereNum} /></li>
                    <li>Dex: <input type='number' value={this.state.character.dex} name='dex' onChange={this.changeHereNum} /></li>
                    <li>Int: <input type='number' value={this.state.character.int} name='int' onChange={this.changeHereNum} /></li>
                    <li>Wis: <input type='number' value={this.state.character.wis} name='wis' onChange={this.changeHereNum} /></li>
                    <li>Cha: <input type='number' value={this.state.character.cha} name='cha' onChange={this.changeHereNum} /></li>
                </ul>
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

export default Display
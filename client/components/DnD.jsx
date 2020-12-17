import React from 'react'
import {make} from '../Dnd'
import Stats from './Stats'
import Mod from './Mods'
import Skills from './Skills'

class DnD extends React.Component {
    state = {
        tempChara: {
            name:'',
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

    handleChange = e => {
        this.setState({
            tempChara: {
            ...this.state.tempChara,
            [e.target.name]: e.target.value
          }
        })
      }

      clickHere = () => {
          const { name } = this.state.tempChara
          const [chara, mod, skills] = make(name, 1)
          this.setState({
            tempChara: chara,
            mod: mod,
            skills: skills
          })
      }

    render () {
      return (
        <>
        <div>
            <input name="name" value={this.state.tempChara.name} onChange={this.handleChange}/>
            <button onClick={this.clickHere}>here</button>
        </div>
        <div>
            <h2>{this.state.tempChara.name}</h2>
        <div>
            <span>
            <h3>attributes</h3>
                <ul>
                    <Stats stat={this.state.tempChara} />
                </ul>
            </span>
            <span>
                <h3>modifier</h3>
                <ul>
                    <Mod mods={this.state.mod}/>
                </ul>
            </span>
            <span>
                <h3>skills</h3>
                <Skills skill={this.state.skills}/>
            </span>
        </div>
        </div>
        </>
      )
    }
  }
  
  export default DnD
import React from 'react'

const Skills = (props) => {
    return (
      <>
                <li>atheletics: {props.skill.atheletics}</li>
                <li>acrobatics: {props.skill.acrobatics}</li>
                <li>arcana: {props.skill.arcana}</li>
                <li>animal handling: {props.skill.animalHandling}</li>
                <li>insight: {props.skill.insight}</li>
                <li>deception: {props.skill.deception}</li>
                <li>intimidation: {props.skill.intimidation}</li>
                <li>performance: {props.skill.performance}</li>
                <li>persuasion: {props.skill.persuasion}</li>
                <li>survival: {props.skill.survival}</li>
                <li>nature: {props.skill.nature}</li>
                <li>religion: {props.skill.religion}</li>
                <li>perception: {props.skill.perception}</li>
                <li>history: {props.skill.history}</li>
                <li>stealth: {props.skill.stealth}</li>
                <li>slight of hand: {props.skill.slightOfHand}</li>
                <li>medicine: {props.skill.medicine}</li>
                <li>investigation: {props.skill.investigation}</li>
      </>
    )
  }
  export default Skills
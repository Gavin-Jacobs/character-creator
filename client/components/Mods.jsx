import React from 'react'

const Mod = (props) => {
    return (
      <>
        <li>Str:{props.mods.str}</li>
        <li>Con: {props.mods.con}</li>
        <li>Dex: {props.mods.dex}</li>
        <li>Int: {props.mods.int}</li>
        <li>Wis: {props.mods.wis}</li>
        <li>Cha: {props.mods.cha}</li>
      </>
    )
  }
  export default Mod
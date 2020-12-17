import React from 'react'

const Stats = (props) => {
    return (
      <>
        <li>Str:{props.stat.str}</li>
        <li>Con: {props.stat.con}</li>
        <li>Dex: {props.stat.dex}</li>
        <li>Int: {props.stat.int}</li>
        <li>Wis: {props.stat.wis}</li>
        <li>Cha: {props.stat.cha}</li>
      </>
    )
  }
  export default Stats
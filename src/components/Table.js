import React from 'react'

const Table = props => {
  let perc = []
  const rows = props.table.map((row, index) => {
    console.log(typeof props.table[20].winPercentage)
    let percentage
    for (var i = 0; i < props.table.length; i++) {
      let perc = props.table[i].winPercentage

      if (perc == undefined) {
        perc = '0';
      } else {
        let perc = Math.round(props.table[i].winPercentage)
      }

    }
    return (
      <tr key={index}>
        <td>{row.pos}</td>
        <td>{row.player}</td>
        <td>{row.team}</td>
        <td>{row.played}</td>
        <td>{row.wins}</td>
        <td>{row.losses}</td>
        <td>{perc}</td>
        <td>{row.eightBalls}</td>
      </tr>
    )
  })
  return(
    <tbody>
      {rows}
    </tbody>
  )
}

export default Table;

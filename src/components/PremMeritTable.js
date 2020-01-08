import React from 'react'

const Table = props => {
  const rows = props.table.map((row, index) => {
    let perc
    if (row.winPercentage === undefined) {
      perc = '0%';
    } else {
      perc = Math.round(row.winPercentage) + '%'
    }

    let eightball
    if (row.eightBalls === undefined) {
      eightball = '0'
    } else {
      eightball = row.eightBalls
    }
    return (
      <tr key={index} className="grid">
        <td >{row.pos}</td>
        <td>{row.player}</td>
        <td>{row.team}</td>
        <td>{row.played}</td>
        <td>{row.wins}</td>
        <td>{row.losses}</td>
        <td>{perc}</td>
        <td>{eightball}</td>
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

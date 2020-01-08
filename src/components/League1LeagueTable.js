import React from 'react'

const Table = props => {
  const rows = props.table.map((row, index) => {
    let wins = row.framesWon;
    let loss = row.framesLost;
    let diff = wins - loss;



    return (
      <tr key={index} className="grid">
        <td >{row.position}</td>
        <td>{row.team}</td>
        <td>{row.played}</td>
        <td>{row.won}</td>
        <td>{row.draw}</td>
        <td>{row.lost}</td>
        <td>{row.points}</td>
        <td>{row.framesWon}</td>
        <td>{row.framesLost}</td>
        <td>{diff}</td>
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

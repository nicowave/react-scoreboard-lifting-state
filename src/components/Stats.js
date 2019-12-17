import React from 'react';


const Stats = ({ players }) => {

  const totalPlayers = players.length
  const totalPoints = players.reduce((total, player) => {
    // initialize total to value = 0 as second parameter of reduce()
    return total + player.score;
  }, 0)
  
  return (
    <table className="stats">
    <tbody>
      <tr>
        <td>Total Players</td>
        <td>{ totalPlayers }</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{ totalPoints }</td>
      </tr>
    </tbody>
  </table>
  );
}



export default Stats;
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {

  // set initial state for properties of scoreboard app using `players` Object
  state = {
    players: [
      { name: "Nico", score: 0, id: 1 },
      { name: "Jim", score: 0, id: 2 },
      { name: "Ashley", score: 0, id: 3 },
      { name: "Lucian", score: 0, id: 4  }
    ]
  };

  prevplayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    console.log('index: ' + index, 'delta: ' + delta);
  }

  handleAddPlayer = (name) => {
    // console.log(...this.state.players)
    this.setState( prevState => {
      return {
        // try... console.log(prevState)
        // `spread operator` OR `...` adds all current players 
        // ...to object passed to setState()
        players: 
          [ ...this.state.players,
            { name,
              score: 0,
              id: this.prevplayerId += 1 }]
      } 
    })
  }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player 
            key={player.id.toString()} 
            name={player.name}
            id={player.id}
            index={index}
            score={player.score}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm 
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
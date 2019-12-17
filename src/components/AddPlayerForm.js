import React, { Component } from 'react';


class AddPlayerForm extends Component {
  // use a reference to avoid creating an eventHandler for when value changes in form
  playerInput = React.createRef();

  handleSubmit = (e) => {
    // preventDefault prevents request being made to server
    // ...subsequent reload of app wipes Application-State
    e.preventDefault()
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset()
  }

  render() {
    console.log(this.playerInput)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            ref={this.playerInput}
            placeholder="Enter a player's name"
         />

         <input
            type="submit"
            value="Add Player"
          />
      </form>
    )
  }
}



export default AddPlayerForm;
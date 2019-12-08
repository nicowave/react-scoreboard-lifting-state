import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    // preventDefault prevents request being made to server
    // ...subsequent reload of app wipes Application-State
    e.preventDefault()
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' })
  }

  render() {
    console.log(this.state.value)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
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
import React, {Component} from 'react';

// Application State or Component State
class Stopwatch extends Component {

  state = {
    isRunning: false
  }

  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning
    })
  }

  render() {
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time"></span>
        <button onClick={ this.handleStopwatch }>
          {this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
import React, {Component} from 'react';

// Application State or Component State
class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previosTime: 0,
  }

  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning
    }))
    if (!this.state.isRunning) {
      console.log('starting timer...')
      this.setState({ previousTime: Date.now() });
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.timePassingYouBy(), 100);
  }

  timePassingYouBy = () => {
    // write down notes from teamtreehouse.com/library/update-the-stopwatch-state-component
    // ...00:42, 1:00 minute
    console.log('time is passing...')
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previosTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previosTime)
      }))
    }
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
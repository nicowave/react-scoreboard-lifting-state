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

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.timePassingYouBy(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('--Component unmounted, timer stopped--')
  }

  timePassingYouBy = () => {
    // write down notes from teamtreehouse.com/library/update-the-stopwatch-state-component
    // ...00:42, 1:00 minute
    if (this.state.isRunning) {
      const now = Date.now();
      console.log(now)
      this.setState( prevState => ({
        previosTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previosTime)
      }))
    }
  }

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000)
    return(
      <div className="stopwatch">
        <h2>
          Stopwatch
        </h2>
        {/* stopwatch time */}
        <span className="stopwatch-time">
          { seconds }
        </span>
        {/* start, stop stopwatch */}
        <button onClick={ this.handleStopwatch }>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        {/* reset stopwatch */}
        <button onClick={ this.handleReset }>
          Reset
        </button>
      </div>
    )
  }
}

export default Stopwatch;
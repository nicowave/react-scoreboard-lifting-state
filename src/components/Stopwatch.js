import React, {Component} from 'react';

// Application State or Component State
class Stopwatch extends Component {
  render() {
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time"></span>
        <button>Start</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch;
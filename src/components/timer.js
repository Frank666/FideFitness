import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      start: 0,
      time: 0,
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      start: Date.now() - this.state.time,
      time: this.state.time,
    });
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      start: 0,
      time: 0,
    });
  };

  render() {
    const { time } = this.state;
    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return (
      <div>
        <p>TIMMER</p>
        <div className="Stopwatch-display">
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerOn === false && this.state.time === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.time > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.time > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Timer;

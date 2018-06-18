import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <h2>Il est {this.state.time.toLocaleTimeString()}</h2>
    )
  }
}

export default Clock;
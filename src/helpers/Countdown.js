import React, { Component } from 'react';

class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const targetDate = new Date('2024-04-05T19:00:00'); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    this.setState({ days, hours, minutes, seconds });
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <h1>Get ready for the 2024 Drive-In Season!</h1>
        <h2>
          {days} Days {hours} Hours {minutes} Minutes
        </h2>
      </div>
    );
  }
}

export default CountdownTimer;

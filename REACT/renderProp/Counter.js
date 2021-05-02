import React, { Component } from 'react';

class Wrapper extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { increment, decrement } = this;
    const { count } = this.state;
    return (
      <div>
        {
          this.props.render({ count, increment, decrement })
        }
      </div>
    );
  }
}

const Counter = () => (
  <Wrapper
    render={({ count, increment, decrement }) => (
      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )}
  />
);

export default Counter;
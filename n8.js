import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Count: {count}</p>
      </div>
    );
  }
}

<MyComponent name="John" />;

import React, { Component, FormEvent } from "react";
import { Form, Input } from "./input";
import Number from "./Number";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Plus</button>
      </div>
    );
  }

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;

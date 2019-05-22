import React, { Component } from "react";
import Child from "./test";

export default class App extends Component {
  state = {
    label: "",
    user: {
      name: {
        firstName: "yagnesh",
        lastName: "modi"
      }
    }
  };

  click = () => {
    let { user } = this.state;
    user = { ...user, name: { ...user.name, lastName: "modh" } };
    console.log(user);
    this.setState({ user: user });
  };

  render() {
    console.log("render parent");
    const { label, user } = this.state;
    return (
      <div>
        <h1>Hello from Parent</h1>
        <button onClick={this.click}>Click Parent</button>
        <Child text="Hello From Props" label={label} user={user} />
      </div>
    );
  }
}

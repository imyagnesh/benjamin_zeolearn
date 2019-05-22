// export const a = 1;
// export const b = 2;
// export const c = 3;

// export default a;

import React, { PureComponent } from "react";

export default class test extends PureComponent {
  state = {
    title: "Title"
  };

  click = () => {
    this.setState({ title: "Title1" });
  };

  render() {
    console.log("render child");
    const { label, text, user } = this.props;
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{label}</h2>
        <h3>{text}</h3>
        <span>{`${user.name.firstName} ${user.name.lastName}`}</span>
        <button onClick={this.click}>Click Me</button>
      </div>
    );
  }
}

// import React, { memo } from "react";

// const test = () => {
//   console.log("calling from child");
//   return (
//     <div>
//       <h1> Child</h1>
//     </div>
//   );
// };

// export default memo(test);

// export const a = 1;
// export const b = 2;
// export const c = 3;

// export default a;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class test extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  };

  state = {
    title: 'Title',
  };

  click = () => {
    this.setState({ title: 'Title1' });
  };

  render() {
    console.log('render child');
    const { label, text, user } = this.props;
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{label}</h2>
        <h3>{text}</h3>
        <span>{`${user.name.firstName} ${user.name.lastName}`}</span>
        <button type="button" onClick={this.click}>
          Click Me
        </button>
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
